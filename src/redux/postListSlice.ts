import { createSlice } from "@reduxjs/toolkit";

interface Post {
    id: number;
    title: string;
    username: string;
    created_datetime: string;
    content: string;
};

interface PostListState {
    postList: Post[];
};

const initialState: PostListState = {
    postList: [],
};

export const postListSlice = createSlice({
    name: "postList",
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.postList = [...state.postList, ...action.payload];
        }
    },
});

export const { getPosts } = postListSlice.actions;
export const postListReducer = postListSlice.reducer;