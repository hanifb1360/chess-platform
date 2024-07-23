import { BoardState } from "../types/chess";

export class ChessEngine {
  private board: BoardState;
  private currentTurn: "white" | "black";

  constructor() {
    this.board = this.initializeBoard();
    this.currentTurn = "white";
  }

  getBoardState(): BoardState {
    return this.board;
  }

  getCurrentTurn(): "white" | "black" {
    return this.currentTurn;
  }

  initializeBoard(): BoardState {
    const initialBoard: BoardState = {
      a8: { type: "rook", color: "black" },
      b8: { type: "knight", color: "black" },
      c8: { type: "bishop", color: "black" },
      d8: { type: "queen", color: "black" },
      e8: { type: "king", color: "black" },
      f8: { type: "bishop", color: "black" },
      g8: { type: "knight", color: "black" },
      h8: { type: "rook", color: "black" },
      a7: { type: "pawn", color: "black" },
      b7: { type: "pawn", color: "black" },
      c7: { type: "pawn", color: "black" },
      d7: { type: "pawn", color: "black" },
      e7: { type: "pawn", color: "black" },
      f7: { type: "pawn", color: "black" },
      g7: { type: "pawn", color: "black" },
      h7: { type: "pawn", color: "black" },
      a2: { type: "pawn", color: "white" },
      b2: { type: "pawn", color: "white" },
      c2: { type: "pawn", color: "white" },
      d2: { type: "pawn", color: "white" },
      e2: { type: "pawn", color: "white" },
      f2: { type: "pawn", color: "white" },
      g2: { type: "pawn", color: "white" },
      h2: { type: "pawn", color: "white" },
      a1: { type: "rook", color: "white" },
      b1: { type: "knight", color: "white" },
      c1: { type: "bishop", color: "white" },
      d1: { type: "queen", color: "white" },
      e1: { type: "king", color: "white" },
      f1: { type: "bishop", color: "white" },
      g1: { type: "knight", color: "white" },
      h1: { type: "rook", color: "white" },
    };

    return initialBoard;
  }

  movePiece(
    sourceSquare: string,
    targetSquare: string
  ): { valid: boolean; state: BoardState } {
    // For now, just return a dummy move result
    const validMove = true; // Replace with real move validation logic

    if (validMove) {
      this.board[targetSquare] = this.board[sourceSquare];
      delete this.board[sourceSquare];
      this.currentTurn = this.currentTurn === "white" ? "black" : "white";
    }

    return { valid: validMove, state: this.board };
  }
}
