import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  id: string;
  white: string;
  black: string;
  moves: string[];
  fen: string;
}

const initialState: GameState = {
  id: "",
  white: "",
  black: "",
  moves: [],
  fen: "start",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState(state, action: PayloadAction<GameState>) {
      return action.payload;
    },
    updateGameState(state, action: PayloadAction<GameState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setGameState, updateGameState } = gameSlice.actions;
export default gameSlice.reducer;
