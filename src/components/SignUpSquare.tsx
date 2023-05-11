import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook";
import { editSignUpText } from "../redux/signUpSlice";

function SignUpSquare() {
    const navigate = useNavigate();

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);
    const loading = useAppSelector((state) => state.signUpReducer.loading);
    const buttonBackgroundColor = useAppSelector((state) => state.signUpReducer.buttonBackgroundColor);

    const dispatch = useDispatch();

    function handleText(e: { target: { value: any; }; }) {
        dispatch(editSignUpText(e.target.value));
    };

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        navigate("/main");
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
    min-width: 500px;
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

    @media only screen and (max-width: 800px) {
        min-width: 280px;
    }
`

const ButtonBox = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: end;
    button {
        background-color: ${(props: { children: { props: { color: any; }; }; }) => props.children.props.color};
        color: #FFFFFF;
    }
`

export default SignUpSquare;