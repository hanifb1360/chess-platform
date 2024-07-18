import fs from "fs";
import path from "path";
import { printSchema } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema"; // Adjust the path to your schema

const schema = makeExecutableSchema({ typeDefs });

// Ensure you are using the absolute path to the client-react-relay directory
const clientRelayPath = path.resolve(
  __dirname,
  "..",
  "..",
  "client-react-relay",
  "src",
  "schema.graphql"
);

// Ensure the directory exists
const dirPath = path.dirname(clientRelayPath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

const schemaString = printSchema(schema);

fs.writeFileSync(clientRelayPath, schemaString);

console.log(`Schema saved to ${clientRelayPath}`);
