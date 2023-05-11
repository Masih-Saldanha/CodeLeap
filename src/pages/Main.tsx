import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook.ts";
import PostSquare from "../components/PostSquare.tsx";
import PostModel from "../components/PostModel.tsx";
import networkRequests from "../actions/networkRequests.ts";
import { useDispatch } from "react-redux";
import { getFreshPosts, getPosts } from "../redux/postListSlice.ts";

function Main() {
    const navigate = useNavigate();

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);
    const postList = useAppSelector((state) => state.postListReducer.postList);

    const dispatch = useDispatch();

    useEffect(() => {
        if (signUpText === "") {
            navigate("/signup");
            return;
        };
        networkRequests
            .getPosts(0)
            .then((response) => {
                dispatch(getFreshPosts(response.data.results));
            })
            .catch((e) => {
                console.log(e.response.data);
            })
    }, []);

    return (
        <MainDiv>
            <section>
                <header>
                    <h1>CodeLeap Network</h1>
                </header>
                <PostSquare></PostSquare>
                {
                    postList.map((post) => {
                        const { id, title, username, created_datetime, content } = post;
                        return (
                            <PostModel
                                key={id}
                                postId={id}
                                title={title}
                                username={username}
                                created_datetime={created_datetime}
                                content={content}
                            ></PostModel>
                        );
                    },)
                }
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