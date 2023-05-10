import { configureStore } from "@reduxjs/toolkit";

import { signUpReducer } from "./signUpSlice.ts";
import { postReducer } from "./postSlice.ts";
import { postListReducer } from "./postListSlice.ts";

export const store = configureStore({
    reducer: {
        signUpReducer,
        postReducer,
        postListReducer,
    },
});

type GetStatTypeOfSignUp = typeof store.getState;

export type StoreState = ReturnType<GetStatTypeOfSignUp>;