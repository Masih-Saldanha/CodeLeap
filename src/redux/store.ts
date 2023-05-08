import { configureStore } from "@reduxjs/toolkit";

import { signUpReducer } from "./signUpSlice.ts";

export const store = configureStore({
    reducer: {
        signUpReducer,
    },
});

type GetStatTypeOfSignUp = typeof store.getState;

export type StoreState = ReturnType<GetStatTypeOfSignUp>;