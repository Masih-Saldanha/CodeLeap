import { createSlice } from "@reduxjs/toolkit";
import { countReducers } from "../actions/countReducers.ts";

interface CountState {
    count: number;
};

const initialState: CountState = {
    count: 0
};

export const countSlice = createSlice({
    name: "count",
    initialState: initialState,
    reducers: countReducers
})

export const {increment, decrement} = countSlice.actions;
export const countReducer = countSlice.reducer;