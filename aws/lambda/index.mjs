import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient, 
  ScanCommand, 
  GetCommand, 
  PutCommand, 
  UpdateCommand, 
  DeleteCommand 
} from "@aws-sdk/lib-dynamodb";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
  ForgotPasswordCommand
} from "@aws-sdk/client-cognito-identity-provider";

const region = process.env.AWS_REGION || "sa-east-1";
const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region }));
const cognito = new CognitoIdentityProviderClient({ region });

const CLIENT_ID = process.env.COGNITO_CLIENT_ID || "46t8rd0jlv6c3gmje9uj10s6c8";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS"
};

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod || "GET";
  const path = event.rawPath || event.path || "/";

  if (method === "OPTIONS") {
    return { statusCode: 200, headers: CORS_HEADERS, body: "" };
  }

  try {
    const parts = path.replace(/^\/api\/?/, "").split("/").filter(Boolean);
    const firstParam = parts[0];
    const secondParam = parts[1];

    if (!firstParam) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: "online", service: "FrevAI AWS Core API", version: "1.0.0" })
      };
    }

    // =========================================================================
    // ENDPOINTS DE AUTENTICAÇÃO (/api/auth/login, /api/auth/signup, etc.)
    // =========================================================================
    if (firstParam === "auth") {
      const body = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});

      if (secondParam === "login") {
        const { email, password } = body;
        if (!email || !password) {
          return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: { message: "E-mail e senha são obrigatórios" } }) };
        }

        try {
          const authRes = await cognito.send(new InitiateAuthCommand({
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: CLIENT_ID,
            AuthParameters: {
              USERNAME: email,
              PASSWORD: password
            }
          }));

          const accessToken = authRes.AuthenticationResult?.AccessToken;
          const idToken = authRes.AuthenticationResult?.IdToken;
          const refreshToken = authRes.AuthenticationResult?.RefreshToken;

          // Recuperar perfil no DynamoDB
          let profile = null;
          try {
            const profRes = await ddb.send(new ScanCommand({
              TableName: "frevai_profiles",
              FilterExpression: "email = :em",
              ExpressionAttributeValues: { ":em": email }
            }));
            if (profRes.Items && profRes.Items.length > 0) {
              profile = profRes.Items[0];
            }
          } catch (_) {}

          return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({
              data: {
                user: {
                  id: profile?.id || email,
                  email: email,
                  user_metadata: {
                    display_name: profile?.display_name || email.split("@")[0],
                    role: profile?.role || "user"
                  }
                },
                session: {
                  access_token: accessToken,
                  id_token: idToken,
                  refresh_token: refreshToken
                }
              },
              profile,
              error: null
            })
          };
        } catch (cognitoErr) {
          return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: { message: cognitoErr.message || "Erro ao entrar no Cognito" } })
          };
        }
      }

      if (secondParam === "signup") {
        const { email, password, metadata = {} } = body;
        if (!email || !password) {
          return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: { message: "E-mail e senha são obrigatórios" } }) };
        }

        try {
          const signRes = await cognito.send(new SignUpCommand({
            ClientId: CLIENT_ID,
            Username: email,
            Password: password,
            UserAttributes: [
              { Name: "email", Value: email },
              { Name: "given_name", Value: metadata.display_name || email.split("@")[0] }
            ]
          }));

          const userId = signRes.UserSub || `usr_${Date.now()}`;
          const newProfile = {
            id: userId,
            email: email,
            display_name: metadata.display_name || email.split("@")[0],
            handle: metadata.handle || ("@" + email.split("@")[0]),
            role: metadata.role || "user",
            artist_id: null,
            artist_request_status: metadata.role === "artist" ? "pending" : "none",
            created_at: new Date().toISOString()
          };

          // Salva no DynamoDB
          await ddb.send(new PutCommand({
            TableName: "frevai_profiles",
            Item: newProfile
          }));

          return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({
              data: {
                user: {
                  id: userId,
                  email: email,
                  user_metadata: newProfile
                }
              },
              error: null
            })
          };
        } catch (cognitoErr) {
          return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: { message: cognitoErr.message || "Erro ao criar conta no Cognito" } })
          };
        }
      }

      if (secondParam === "forgot-password") {
        const { email } = body;
        try {
          await cognito.send(new ForgotPasswordCommand({
            ClientId: CLIENT_ID,
            Username: email
          }));
          return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({ success: true, message: "Código de recuperação enviado para o e-mail" })
          };
        } catch (err) {
          return {
            statusCode: 400,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: { message: err.message } })
          };
        }
      }
    }

    // =========================================================================
    // CRUD GENÉRICO DE TABELAS (/api/posts, /api/artists, /api/profiles, etc.)
    // =========================================================================
    const tableName = `frevai_${firstParam.replace(/^frevai_/, "")}`;
    const idParam = secondParam;

    if (method === "GET") {
      if (idParam) {
        const res = await ddb.send(new GetCommand({ TableName: tableName, Key: { id: idParam } }));
        return {
          statusCode: res.Item ? 200 : 404,
          headers: CORS_HEADERS,
          body: JSON.stringify(res.Item || { error: "Not found" })
        };
      } else {
        const res = await ddb.send(new ScanCommand({ TableName: tableName }));
        return {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify(res.Items || [])
        };
      }
    }

    if (method === "POST" || method === "PUT") {
      const body = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});
      if (!body.id) {
        body.id = idParam || `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      }
      if (!body.created_at) {
        body.created_at = new Date().toISOString();
      }
      body.updated_at = new Date().toISOString();

      await ddb.send(new PutCommand({ TableName: tableName, Item: body }));
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify(body)
      };
    }

    if (method === "DELETE") {
      if (!idParam) {
        return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Missing ID" }) };
      }
      await ddb.send(new DeleteCommand({ TableName: tableName, Key: { id: idParam } }));
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ success: true, id: idParam })
      };
    }

    return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: "Method not allowed" }) };
  } catch (err) {
    console.error("Handler error:", err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: err.message || "Internal Server Error" })
    };
  }
};
