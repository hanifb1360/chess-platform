export interface ChessPiece {
  type: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
  color: "white" | "black";
}

export interface BoardState {
  [key: string]: ChessPiece | null;
}

// Define the Square type as a string
export type Square = string;
