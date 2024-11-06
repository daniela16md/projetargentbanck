import { createSlice } from "@reduxjs/toolkit";

const initialSignInState = {
  token: localStorage.getItem("token") || ""
};


const signInSlice = createSlice({
  name: "signIn",
  initialState: initialSignInState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    signOut: (state) => {
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { signIn, signOut } = signInSlice.actions;
export default signInSlice.reducer;