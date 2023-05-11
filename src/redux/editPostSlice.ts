import { createSlice } from "@reduxjs/toolkit";

interface EditPostState {
    title: string;
    content: string;
};

const initialState: EditPostState = {
    title: "",
    content: "",
};

export const editPostSlice = createSlice({
    name: "editPost",
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload;
        },
        changeContent: (state, action) => {
            state.content = action.payload;
        },
    },
});

export const { changeTitle, changeContent } = editPostSlice.actions;
export const editPostReducer = editPostSlice.reducer;