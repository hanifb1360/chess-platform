import { IResolvers } from "@graphql-tools/utils";
import { registerUser, loginUser } from "../services/auth";
import Game from "../models/Game";
import { pubsub, GAME_UPDATED } from "../services/pubsub";
import User from "../models/User";

const Mutation: IResolvers = {
  Mutation: {
    register: async (_, { username, email, password }) => {
      return await registerUser(username, email, password);
    },
    login: async (_, { email, password }) => {
      return await loginUser(email, password);
    },
    startGame: async (_, { whiteId, blackId }) => {
      const white = await User.findById(whiteId);
      const black = await User.findById(blackId);

      if (!white || !black) {
        throw new Error("Invalid user IDs");
      }

      const game = new Game({ white: whiteId, black: blackId });
      await game.save();

      return game;
    },
    makeMove: async (_, { gameId, move }) => {
      const game = await Game.findById(gameId);

      if (!game) {
        throw new Error("Game not found");
      }

      game.moves.push(move);
      await game.save();

      pubsub.publish(GAME_UPDATED, { gameUpdated: game });

      return game;
    },
  },
};

export default Mutation;
