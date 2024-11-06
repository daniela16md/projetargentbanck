import { createSlice } from "@reduxjs/toolkit";

const initialUserProfile = JSON.parse(localStorage.getItem("userProfile")) || {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  userName: "",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: initialUserProfile,
  reducers: {
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      localStorage.setItem("userProfile", JSON.stringify(state));
    },
    editUserData: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userProfile", JSON.stringify(state));
    },
  },
});

export const { setUserProfile, editUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;