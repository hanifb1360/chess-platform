import Game from "../models/Game";

// Define the createGame function
export const createGame = async (whiteId: string, blackId: string) => {
  const game = new Game({ white: whiteId, black: blackId });
  await game.save();
  return game;
};

// Export other service functions if there are any
export const makeMove = async (gameId: string, move: string) => {
  const game = await Game.findById(gameId);
  if (!game) {
    throw new Error("Game not found");
  }

  // Apply the move to the game
  // This is a simplified example; you will need to add the actual move logic here
  game.moves.push(move);
  await game.save();
  return game;
};
