import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql";
import connectDB from "./config/db";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "./models/User";

dotenv.config();

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema,
    context: async ({ req }) => {
      const token = req.headers.authorization || "";
      if (token) {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            id: string;
          };
          const user = await User.findById(decoded.id);
          return { req, user };
        } catch (error) {
          console.error(error);
        }
      }
      return { req };
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer().catch((error) => console.log(error));
