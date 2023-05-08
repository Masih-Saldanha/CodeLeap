import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook.ts";
import PostSquare from "../components/PostSquare.tsx";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);

    useEffect(() => {
        if (signUpText === "") {
            navigate("/signup");
        };
    }, [])

    return (
        <MainDiv>
            <section>
                <header>
                    <h1>CodeLeap Network</h1>
                </header>
                <PostSquare></PostSquare>
            </section>
        </MainDiv>
    )
};

const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    section {
        background-color: #FFFFFF;
        max-width: 800px;
        width: 100%;
        /* width: 800px; */
        header {
            background-color: #7695EC;
            padding: 27px 37px;
        }
    }
`

export default Main;