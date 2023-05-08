import { createSlice } from "@reduxjs/toolkit";

interface SignUpState {
    signUpText: string,
    loading: boolean,
    buttonBackgroundColor: string,
};

const initialState: SignUpState = {
    signUpText: "",
    loading: true,
    buttonBackgroundColor: "grey"
};

export const signUpSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        signUp: (state, action) => {
            state.signUpText = action.payload;
            if (state.signUpText === "") {
                state.buttonBackgroundColor = "grey";
                state.loading = true;
            } else {
                state.buttonBackgroundColor = "#7695EC";
                state.loading = false;
            }
        },
        loadingOn: (state) => {
            state.loading = true;
        },
        loadingOff: (state) => {
            state.loading = false;
        },
    }
})

export const { signUp, loadingOn, loadingOff } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;