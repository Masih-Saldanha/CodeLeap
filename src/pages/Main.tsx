import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook";
import { getFreshPosts, getPosts } from "../redux/postListSlice";
import networkRequests from "../actions/networkRequests";
import PostSquare from "../components/PostSquare";
import PostModel from "../components/PostModel";
import Loading from "../components/Loading";

function Main() {
    const navigate = useNavigate();

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);
    const postList = useAppSelector((state) => state.postListReducer.postList);
    const [page, setPage] = useState(1);

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

    function fetchMoreData() {
        networkRequests
            .getPosts(page)
            .then((response) => {
                dispatch(getPosts(response.data.results));
                setPage(page + 1);
            })
            .catch((e) => {
                alert("could not retrieve new posts");
            })
    };

    function showPosts() {
        return (
            <InfiniteScroll
                dataLength={postList.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Loading message="Loading more posts..."></Loading>}
            >
                {postList.map((post) => {
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
                    )
                })}
            </InfiniteScroll>
        )
    }

    return (
        <MainDiv>
            <section>
                <header>
                    <h1>CodeLeap Network</h1>
                </header>
                <PostSquare></PostSquare>
                {showPosts()}
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

const Load = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 52px;
`

const NoPosts = styled.h2`
    margin: 16px 0;
    text-align: center;
    color: #6D6D6D;
`

export default Main;