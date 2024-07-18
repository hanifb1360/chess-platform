import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  id: string;
  fen: string;
  moves: string[];
}

const initialState: GameState = {
  id: "",
  fen: "start",
  moves: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState(state, action: PayloadAction<GameState>) {
      state.id = action.payload.id;
      state.fen = action.payload.fen;
      state.moves = action.payload.moves;
    },
    updateGameState(state, action: PayloadAction<GameState>) {
      state.fen = action.payload.fen;
      state.moves = action.payload.moves;
    },
  },
});

export const { setGameState, updateGameState } = gameSlice.actions;
export default gameSlice.reducer;
