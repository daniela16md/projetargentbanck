import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./userProfileSlice";  
import signInReducer from "./signInSlice";         

const store = configureStore({
  reducer: { 
    userProfile: userProfileReducer,
    signIn: signInReducer
  },
});

export default store;
