import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  password: null,
  userName: null,
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  }
});

export const {
  setUser
} = userSlice.actions

export default userSlice.reducer