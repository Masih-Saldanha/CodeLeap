import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { useAppSelector } from "../redux/hook.ts";
import { editTitle, editContent } from "../redux/postSlice.ts";
import networkRequests from "../actions/networkRequests.ts";

function PostSquare() {
    const username = useAppSelector((state) => state.signUpReducer.signUpText);
    const titleText = useAppSelector((state) => state.postReducer.titleText);
    const contentText = useAppSelector((state) => state.postReducer.contentText);
    const postButtonDisabled = useAppSelector((state) => state.postReducer.postButtonDisabled);
    const postButtonColor = useAppSelector((state) => state.postReducer.postButtonColor);

    const dispatch = useDispatch();

    function handleTitle(e: { target: { value: any; }; }) {
        dispatch(editTitle(e.target.value));
    };

    function handleContent(e: { target: { value: any; }; }) {
        dispatch(editContent(e.target.value));
    };

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        networkRequests
            .postText(username, titleText, contentText)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e.response.data);
            });
    };

    return (
        <PostArticle>
            <form onSubmit={handleSubmit}>
                <h2>What’s on your mind?</h2>
                <h3>Title</h3>
                <input
                    type="text"
                    placeholder="Hello world"
                    value={titleText}
                    onChange={handleTitle}
                ></input>
                <h3>Content</h3>
                <textarea
                    placeholder="Content here"
                    value={contentText}
                    onChange={handleContent}
                ></textarea>
                <ButtonBox>
                    <button
                        type="submit"
                        color={postButtonColor}
                        disabled={postButtonDisabled}
                    >Create</button>
                </ButtonBox>
            </form>
        </PostArticle>
    )
};

const PostArticle = styled.article`
    border: 1px solid #999999;
    border-radius: 16px;
    padding: 24px;
    margin: 24px;
    form {
        h2 {
            margin-bottom: 24px;
        }
        h3 {
            margin-bottom: 8px;
        }
        input {
            border: 1px solid #777777;
            margin-bottom: 24px;
            font-size: 14px;
        }
        input::placeholder {
            font-size: 14px;
            color: #CCCCCC;
        }
        textarea {
            resize: none;
            width: 100%;
            height: 74px;
            border-radius: 8px;
            border: 1px solid #777777;
            margin-bottom: 24px;
            padding: 8px;
            font-size: 14px;
        }
        textarea::placeholder {
            font-size: 14px;
            color: #CCCCCC;
        }
    }
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: end;
    button {
        background-color: ${(props: { children: { props: { color: any; }; }; }) => props.children.props.color};
        color: #FFFFFF;
    }
`

export default PostSquare;