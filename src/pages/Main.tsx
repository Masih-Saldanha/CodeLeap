import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook";
import { getFreshPosts } from "../redux/postListSlice";
import networkRequests from "../actions/networkRequests";
import PostSquare from "../components/PostSquare";
import PostModel from "../components/PostModel";

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
                alert("could not retrieve new posts");
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
    section {
        background-color: #FFFFFF;
        max-width: 800px;
        width: 100%;
        header {
            background-color: #7695EC;
            padding: 27px 37px;
        }
    }
`

export default Main;