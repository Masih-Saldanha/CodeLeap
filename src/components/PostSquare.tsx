import React from "react";
import styled from "styled-components";

function PostSquare() {
    return (
        <PostArticle>
            <form>
                <h2>What’s on your mind?</h2>
                <h3>Title</h3>
                <input
                    type="text"
                    placeholder="Hello world"
                    // value={}
                    // onChange={}
                ></input>
                <h3>Content</h3>
                <textarea
                    placeholder="Content here"
                    // value={}
                    // onChange={}                
                ></textarea>
                <ButtonBox>
                    <button
                        type="submit"
                        // color={}
                        // disabled={}
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
        }
        textarea::placeholder {
            font-size: 14px;
            color: #CCCCCC;
            padding: 8px;
        }
    }
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: end;
    button {
        /* background-color: ${(props) => props.children.props.color}; */
        color: #FFFFFF;
    }
`

export default PostSquare;