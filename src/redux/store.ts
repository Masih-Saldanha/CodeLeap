import { configureStore } from "@reduxjs/toolkit";

import { signUpReducer } from "./signUpSlice.ts";
import { postReducer } from "./postSlice.ts";

export const store = configureStore({
    reducer: {
        signUpReducer,
        postReducer,
    },
});

type GetStatTypeOfSignUp = typeof store.getState;

export type StoreState = ReturnType<GetStatTypeOfSignUp>;