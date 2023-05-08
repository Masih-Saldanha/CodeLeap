import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook.ts";
import { signUp, loadingOn, loadingOff } from "../redux/signUpSlice.ts";
import networkRequests from "../actions/networkRequests.ts";

function SignUpSquare() {
    const navigate = useNavigate();

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);
    const loading = useAppSelector((state) => state.signUpReducer.loading);
    const buttonBackgroundColor = useAppSelector((state) => state.signUpReducer.buttonBackgroundColor);

    const dispatch = useDispatch();

    function handleText(e: { target: { value: any; }; }) {
        dispatch(signUp(e.target.value));
    };

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        navigate("/main");
        // dispatch(loadingOn());
        // setTimeout(() => dispatch(loadingOff()), 3000);
        // setTimeout(dispatch(loadingOff), 5000);
        // networkRequests
        //     .signUp(signUpText)
        //     .then((response) => {
        //         dispatch(loadingOff);
        //         console.log(response);
        //     })
        //     .catch((e) => {
        //         dispatch(loadingOff);
        //         console.log(e);
        //     });
    };

    return (
        <SignUpForm>
            <form onSubmit={handleSubmit}>
                <h2>Welcome to CodeLeap network!</h2>
                <h3>Please enter your username</h3>
                <input
                    type="text"
                    placeholder="John doe"
                    value={signUpText}
                    onChange={handleText}
                ></input>
                <ButtonBox>
                    <button
                        type="submit"
                        color={buttonBackgroundColor}
                        disabled={loading}
                    >ENTER</button>
                </ButtonBox>
            </form>
        </SignUpForm>
    )
}

const SignUpForm = styled.main`
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 16px;
    padding: 24px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    form {
        h2 {
            margin-bottom: 24px;            
        }
        h3 {
            margin-bottom: 8px;
        }
    }
`

const ButtonBox = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: end;
    button {
        background-color: ${(props) => props.children.props.color};
        color: #FFFFFF;
    }
`

export default SignUpSquare;