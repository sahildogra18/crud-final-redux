import { configureStore } from "@reduxjs/toolkit";
import playerData from "../features/playerDetailSlice";

export const store = configureStore({
  reducer: {
    app: playerData,
  },
});
