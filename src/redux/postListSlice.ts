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
        getFreshPosts: (state, action) => {
            state.postList = action.payload;
        },
        getPosts: (state, action) => {
            state.postList = [...state.postList, ...action.payload];
        }
    },
});

export const { getFreshPosts, getPosts } = postListSlice.actions;
export const postListReducer = postListSlice.reducer;