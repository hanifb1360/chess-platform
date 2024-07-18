import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Game {
    id: ID!
    white: User!
    black: User!
    fen: String!
    moves: [String!]!
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type Query {
    me: User
    game(id: ID!): Game
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    startGame(whiteId: ID!, blackId: ID!): Game
    makeMove(gameId: ID!, move: String!): Game
  }

  type Subscription {
    gameUpdated(gameId: ID!): Game
  }
`;

export default typeDefs;
