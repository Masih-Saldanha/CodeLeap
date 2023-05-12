import { createSlice } from "@reduxjs/toolkit";

interface SignUpState {
    localStorageUser: string;
    signUpText: string,
    loading: boolean,
    buttonBackgroundColor: string,
};

const initialState: SignUpState = {
    localStorageUser: localStorage.getItem("user"),
    signUpText: "",
    loading: true,
    buttonBackgroundColor: "grey",
};

export const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        editSignUpText: (state, action) => {
            state.signUpText = action.payload;
            if (state.signUpText === "") {
                state.buttonBackgroundColor = "grey";
                state.loading = true;
            } else {
                state.buttonBackgroundColor = "#7695EC";
                state.loading = false;
            }
        },
        storeUser: (state, action) => {
            editSignUpText(action.payload);
            state.localStorageUser = action.payload;
            localStorage.setItem("user", action.payload);
        },
        unstoreUser: (state) => {
            state.localStorageUser = null;
            localStorage.clear();
        },
    },
});

export const { editSignUpText, storeUser, unstoreUser } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;