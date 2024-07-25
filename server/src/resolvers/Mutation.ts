import { createGame, makeMove } from "../services/gameService"; // Import createGame and makeMove
import { IResolvers } from "@graphql-tools/utils";
import { registerUser, loginUser } from "../services/auth";

const Mutation: IResolvers = {
  Mutation: {
    register: async (_, { username, email, password }) => {
      return await registerUser(username, email, password);
    },
    login: async (_, { email, password }) => {
      return await loginUser(email, password);
    },
    startGame: async (_, { whiteId, blackId }) => {
      return await createGame(whiteId, blackId); // Ensure the createGame function is used here
    },
    makeMove: async (_, { gameId, move }) => {
      return await makeMove(gameId, move); // Ensure the makeMove function is used here
    },
  },
};

export default Mutation;
