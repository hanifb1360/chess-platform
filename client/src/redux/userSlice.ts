import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  username: string | null;
  email: string | null;
  token: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  email: null,
  token: localStorage.getItem("token") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        email: string;
        token: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.id = null;
      state.username = null;
      state.email = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
