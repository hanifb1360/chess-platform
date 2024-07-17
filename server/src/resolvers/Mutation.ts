import { IResolvers } from "@graphql-tools/utils";
import { registerUser, loginUser } from "../services/auth";
import Game from "../models/Game";

const Mutation: IResolvers = {
  Mutation: {
    register: async (_, { username, email, password }) => {
      return await registerUser(username, email, password);
    },
    login: async (_, { email, password }) => {
      return await loginUser(email, password);
    },
    startGame: async (_, { whiteId, blackId }) => {
      const newGame = new Game({ white: whiteId, black: blackId });
      await newGame.save();
      return newGame.populate("white black");
    },
  },
};

export default Mutation;
