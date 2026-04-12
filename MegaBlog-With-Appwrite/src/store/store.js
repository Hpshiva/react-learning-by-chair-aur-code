import { configureStore } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";
const store = configureStore({
  reducer: {
    authService: authService,
  },
});

export default store;
