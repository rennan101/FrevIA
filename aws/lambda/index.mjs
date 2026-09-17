import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient, 
  ScanCommand, 
  GetCommand, 
  PutCommand, 
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
    const thirdParam = parts[2];

    if (!firstParam) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: "online", service: "FrevAI AWS Core API", version: "1.1.0" })
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
    // ENDPOINTS SOCIAIS (/api/social/state, /api/social/like, etc.)
    // =========================================================================
    if (firstParam === "social") {
      const body = typeof event.body === "string" ? JSON.parse(event.body || "{}") : (event.body || {});

      // Buscar estado social completo (likes, salvos, favoritos)
      if (secondParam === "state") {
        const userId = event.queryStringParameters?.userId || thirdParam || body.userId;
        if (!userId) {
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ likedPostIds: [], savedPostIds: [], favoriteArtistIds: [] }) };
        }

        const [likesRes, savesRes, favsRes] = await Promise.all([
          ddb.send(new ScanCommand({
            TableName: "frevai_post_likes",
            FilterExpression: "user_id = :uid",
            ExpressionAttributeValues: { ":uid": userId }
          })),
          ddb.send(new ScanCommand({
            TableName: "frevai_saved_posts",
            FilterExpression: "user_id = :uid",
            ExpressionAttributeValues: { ":uid": userId }
          })),
          ddb.send(new ScanCommand({
            TableName: "frevai_artist_favorites",
            FilterExpression: "user_id = :uid",
            ExpressionAttributeValues: { ":uid": userId }
          }))
        ]);

        return {
          statusCode: 200,
          headers: CORS_HEADERS,
          body: JSON.stringify({
            likedPostIds: (likesRes.Items || []).map(i => i.post_id),
            savedPostIds: (savesRes.Items || []).map(i => i.post_id),
            favoriteArtistIds: (favsRes.Items || []).map(i => i.artist_id)
          })
        };
      }

      // Alternar Like em Post
      if (secondParam === "toggle-like") {
        const { postId, userId } = body;
        if (!postId || !userId) return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Faltam parâmetros" }) };

        const idKey = `${userId}_${postId}`;
        const existing = await ddb.send(new GetCommand({ TableName: "frevai_post_likes", Key: { id: idKey } }));

        if (existing.Item) {
          await ddb.send(new DeleteCommand({ TableName: "frevai_post_likes", Key: { id: idKey } }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ liked: false }) };
        } else {
          await ddb.send(new PutCommand({
            TableName: "frevai_post_likes",
            Item: { id: idKey, user_id: userId, post_id: postId, created_at: new Date().toISOString() }
          }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ liked: true }) };
        }
      }

      // Alternar Post Salvo
      if (secondParam === "toggle-save") {
        const { postId, userId } = body;
        if (!postId || !userId) return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Faltam parâmetros" }) };

        const idKey = `${userId}_${postId}`;
        const existing = await ddb.send(new GetCommand({ TableName: "frevai_saved_posts", Key: { id: idKey } }));

        if (existing.Item) {
          await ddb.send(new DeleteCommand({ TableName: "frevai_saved_posts", Key: { id: idKey } }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ saved: false }) };
        } else {
          await ddb.send(new PutCommand({
            TableName: "frevai_saved_posts",
            Item: { id: idKey, user_id: userId, post_id: postId, created_at: new Date().toISOString() }
          }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ saved: true }) };
        }
      }

      // Alternar Artista Favorito
      if (secondParam === "toggle-favorite") {
        const { artistId, userId } = body;
        if (!artistId || !userId) return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: "Faltam parâmetros" }) };

        const idKey = `${userId}_${artistId}`;
        const existing = await ddb.send(new GetCommand({ TableName: "frevai_artist_favorites", Key: { id: idKey } }));

        if (existing.Item) {
          await ddb.send(new DeleteCommand({ TableName: "frevai_artist_favorites", Key: { id: idKey } }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ favorited: false }) };
        } else {
          await ddb.send(new PutCommand({
            TableName: "frevai_artist_favorites",
            Item: { id: idKey, user_id: userId, artist_id: artistId, created_at: new Date().toISOString() }
          }));
          return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ favorited: true }) };
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
