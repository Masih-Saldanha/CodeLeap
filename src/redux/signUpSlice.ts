import { createSlice } from "@reduxjs/toolkit";

interface SignUpState {
    signUpText: string,
    loading: boolean,
    buttonBackgroundColor: string,
};

const initialState: SignUpState = {
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
    },
});

export const { editSignUpText } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;