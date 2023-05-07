import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./countSlice.ts";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

type GetStatType = typeof store.getState;

export type RootState = ReturnType<GetStatType>;