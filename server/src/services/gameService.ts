import Game from "../models/Game";
import User from "../models/User";
import { pubsub, GAME_UPDATED } from "./pubsub";

export const createGame = async (whiteId: string, blackId: string) => {
  const white = await User.findById(whiteId);
  const black = await User.findById(blackId);

  if (!white || !black) {
    throw new Error("Invalid user IDs");
  }

  const game = new Game({
    white: whiteId,
    black: blackId,
    fen: "start", // Initial position for a new game
    moves: [],
  });
  await game.save();

  return game;
};

export const makeMove = async (gameId: string, move: string) => {
  const game = await Game.findById(gameId);

  if (!game) {
    throw new Error("Game not found");
  }

  console.log("Received move:", move);

  game.moves.push(move); // Ensure the move is valid
  await game.save(); // Save the game with the new move

  const updatedGame = await Game.findById(gameId);
  pubsub.publish(GAME_UPDATED, { gameUpdated: updatedGame });

  return updatedGame;
};
