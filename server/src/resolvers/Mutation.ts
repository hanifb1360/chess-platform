import { IResolvers } from "@graphql-tools/utils";
import { registerUser, loginUser } from "../services/auth";
import { createGame, makeMove } from "../services/gameService"; // Import game service

const Mutation: IResolvers = {
  Mutation: {
    register: async (_, { username, email, password }) => {
      return await registerUser(username, email, password);
    },
    login: async (_, { email, password }) => {
      return await loginUser(email, password);
    },
    startGame: async (_, { whiteId, blackId }) => {
      return await createGame(whiteId, blackId);
    },
    makeMove: async (_, { gameId, move }) => {
      return await makeMove(gameId, move);
    },
  },
};

export default Mutation;
