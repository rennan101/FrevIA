import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { 
  DynamoDBDocumentClient, 
  ScanCommand, 
  GetCommand, 
  PutCommand, 
  UpdateCommand, 
  DeleteCommand 
} from "@aws-sdk/lib-dynamodb";

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: process.env.AWS_REGION || "sa-east-1" }));

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
    // Rota: /api/:table
    const parts = path.replace(/^\/api\/?/, "").split("/").filter(Boolean);
    const tableParam = parts[0];
    const idParam = parts[1];

    if (!tableParam) {
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ status: "online", service: "FrevAI AWS Core API", version: "1.0.0" })
      };
    }

    const tableName = `frevai_${tableParam.replace(/^frevai_/, "")}`;

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
