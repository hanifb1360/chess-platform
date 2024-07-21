import { IResolvers } from "@graphql-tools/utils";
import { registerUser, loginUser } from "../services/auth";
import Game from "../models/Game";
import User from "../models/User"; // Ensure this import statement is correct
import { pubsub, GAME_UPDATED } from "../services/pubsub";

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

      console.log("Received move:", move);
      // Validate and process the move

      game.moves.push(move); // Ensure the move is valid
      await game.save(); // It ensures that all modifications to the game object, such as the new move, are saved to the database.

      const updatedGame = await game.save();
      pubsub.publish(GAME_UPDATED, { gameUpdated: updatedGame });
      //to keep all clients synced with the latest game progress, notify all subscribers about the updated game state

      return updatedGame;
    },
  },
};

export default Mutation;
