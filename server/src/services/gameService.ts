import Game from "../models/Game";
import { pubsub, GAME_UPDATED } from "./pubsub";

export const makeMove = async (gameId: string, move: string) => {
  const game = await Game.findById(gameId);
  if (!game) throw new Error("Game not found");

  // Implement move validation logic
  game.moves.push(move);
  await game.save();

  pubsub.publish(GAME_UPDATED, { gameUpdated: game });

  return game;
};
