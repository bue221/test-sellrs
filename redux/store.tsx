import { configureStore } from "@reduxjs/toolkit";
import { DEVTOOLS } from "config";
import { createWrapper } from "next-redux-wrapper";
import api from "services/api.service";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  devTools: DEVTOOLS,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
