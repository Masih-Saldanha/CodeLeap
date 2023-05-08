import React from "react";
import styled from "styled-components";

import PostSquare from "../components/PostSquare.tsx";

function Main() {
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