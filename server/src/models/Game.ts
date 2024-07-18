import { Schema, model, Document } from "mongoose";

export interface IGame extends Document {
  white: Schema.Types.ObjectId;
  black: Schema.Types.ObjectId;
  moves: string[];
  fen: string;
}

const gameSchema = new Schema<IGame>({
  white: { type: Schema.Types.ObjectId, ref: "User", required: true },
  black: { type: Schema.Types.ObjectId, ref: "User", required: true },
  moves: { type: [String], default: [] },
  fen: { type: String, required: true },
});

const Game = model<IGame>("Game", gameSchema);
export default Game;
