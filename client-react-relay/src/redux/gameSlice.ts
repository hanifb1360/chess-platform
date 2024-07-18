import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  id: string | null;
  white: string | null;
  black: string | null;
  moves: string[];
}

const initialState: GameState = {
  id: null,
  white: null,
  black: null,
  moves: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<GameState>) => {
      state.id = action.payload.id;
      state.white = action.payload.white;
      state.black = action.payload.black;
      state.moves = action.payload.moves;
    },
    addMove: (state, action: PayloadAction<string>) => {
      state.moves.push(action.payload);
    },
    clearGame: (state) => {
      state.id = null;
      state.white = null;
      state.black = null;
      state.moves = [];
    },
  },
});

export const { setGame, addMove, clearGame } = gameSlice.actions;
export default gameSlice.reducer;
