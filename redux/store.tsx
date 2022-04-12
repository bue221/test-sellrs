import { configureStore } from "@reduxjs/toolkit";
import { DEVTOOLS } from "config";

export const store = configureStore({
  reducer: {},
  devTools: DEVTOOLS,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
