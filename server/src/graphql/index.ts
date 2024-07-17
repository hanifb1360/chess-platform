import { IResolvers } from "@graphql-tools/utils";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "../schema";
import Query from "../resolvers/Query";
import Mutation from "../resolvers/Mutation";

const resolvers: IResolvers = {
  ...Query,
  ...Mutation,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
