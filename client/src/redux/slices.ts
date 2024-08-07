import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gameReducer from "./gameSlice";

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
