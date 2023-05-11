import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
// import { BiEdit } from "react-icons/bi"

import { useAppSelector } from "../redux/hook.ts";
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";
import networkRequests from "../actions/networkRequests.ts";
import { getFreshPosts } from "../redux/postListSlice.ts";

function PostModel(props: { postId: number; title: any; username: any; created_datetime: any; content: any; }) {
    const { postId, title, username, created_datetime, content } = props;

    const signUpText = useAppSelector((state) => state.signUpReducer.signUpText);

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editData, setEditData] = useState({
        title: "",
        content: "",
    });

    const dispatch = useDispatch();

    Modal.setAppElement("#root");

    const now = dayjs(Date());
    const date = dayjs(created_datetime);

    const minutes = now.diff(date, "minute");
    const hours = now.diff(date, "hour");
    const days = now.diff(date, "day");
    const months = now.diff(date, "month");
    const years = now.diff(date, "year");

    let minuteString: string;
    minutes !== 1 ? (minuteString = "minutes") : (minuteString = "minute");
    let hourString: string;
    hours !== 1 ? (hourString = "hours") : (hourString = "hour");
    let dayString: string;
    days !== 1 ? (dayString = "days") : (dayString = "day");
    let monthString: string;
    months !== 1 ? (monthString = "months") : (monthString = "month");
    let yearString: string;
    years !== 1 ? (yearString = "years") : (yearString = "year");

    let dateString = `${minutes} ${minuteString} ago`
    hours === 0 ? (dateString = dateString) : (dateString = `${hours} ${hourString} ago`);
    days === 0 ? (dateString = dateString) : (dateString = `${days} ${dayString} ago`);
    months === 0 ? (dateString = dateString) : (dateString = `${months} ${monthString} ago`);
    years === 0 ? (dateString = dateString) : (dateString = `${years} ${yearString} ago`);

    function toggleModalDelete() {
        setIsOpenDelete(!isOpenDelete);
    };

    function deletePost() {
        networkRequests
            .deletePost(postId)
            .then((response) => {
                console.log(response.data);
                console.log("deletou");
                networkRequests
                    .getPosts(0)
                    .then((response) => {
                        dispatch(getFreshPosts(response.data.results));
                        console.log("pegou lista de novo")
                    })
                    .catch((e) => {
                        console.log(e.response.data);
                    });
            })
            .catch((e) => {
                console.log(e.response.data);
            });
    }

    function toggleModalEdit() {
        setIsOpenEdit(!isOpenEdit);
    };

    function handleEditInputs(e, property) {
        setEditData({ ...editData, [property]: e.target.value });
    };

    function editPost() {
        networkRequests
            .editPost(postId, editData.title, editData.content)
            .then((response) => {
                console.log(response.data);
                console.log("editou");
                networkRequests
                    .getPosts(0)
                    .then((response) => {
                        dispatch(getFreshPosts(response.data.results));
                        console.log("pegou lista de novo");
                        toggleModalEdit();
                        setEditData({title: "", content: ""});
                    })
                    .catch((e) => {
                        console.log(e.response.data);
                    });
            })
            .catch((e) => {
                console.log(e.response.data);
            });
    };

    return (
        <PostDiv>
            <TopBar>
                <h1>{title}</h1>
                {
                    signUpText === username ?
                        <div>
                            <img src={trash} onClick={toggleModalDelete}></img>
                            <Modal
                                isOpen={isOpenDelete}
                                onRequestClose={toggleModalDelete}
                                className="_"
                                overlayClassName="_"
                                contentElement={(props, children) => (
                                    <DeleteModalStyle {...props}>{children}</DeleteModalStyle>
                                )}
                                overlayElement={(props, contentElement) => (
                                    <DeleteOverlayStyle {...props}>{contentElement}</DeleteOverlayStyle>
                                )}
                            >
                                {/* { */}
                                {/* !deleting ? */}
                                <>
                                    <h2>Are you sure you want to delete this item?</h2>
                                    <aside>
                                        <aside>
                                            <CancelDelete onClick={toggleModalDelete}>Cancel</CancelDelete>
                                            <ConfirmDelete onClick={deletePost}>Delete</ConfirmDelete>
                                        </aside>
                                    </aside>
                                </>
                                {/* : */}
                                {/* <h1>LOADING</h1> */}
                                {/* } */}
                            </Modal>

                            <img src={edit} onClick={toggleModalEdit}></img>
                            <Modal
                                isOpen={isOpenEdit}
                                onRequestClose={toggleModalEdit}
                                className="_"
                                overlayClassName="_"
                                contentElement={(props, children) => (
                                    <DeleteModalStyle {...props}>{children}</DeleteModalStyle>
                                )}
                                overlayElement={(props, contentElement) => (
                                    <DeleteOverlayStyle {...props}>{contentElement}</DeleteOverlayStyle>
                                )}
                            >
                                {/* { */}
                                {/* !deleting ? */}
                                <>
                                    <h2>Edit item</h2>
                                    {/* COLOCAR CONTEUDO AQUI EM BAIXO */}
                                    <h3>Title</h3>
                                    <input
                                        type="text"
                                        placeholder="Hello world"
                                        value={editData.title}
                                        onChange={(e) => handleEditInputs(e, "title")}
                                    ></input>
                                    <h3>Content</h3>
                                    <textarea
                                        placeholder="Content here"
                                        value={editData.content}
                                        onChange={(e) => handleEditInputs(e, "content")}
                                    ></textarea>
                                    {/* COLOCAR CONTEUDO AQUI EM CIMA */}
                                    <aside>
                                        <aside>
                                            <CancelDelete onClick={toggleModalEdit}>Cancel</CancelDelete>
                                            <ConfirmEdit onClick={editPost}>Save</ConfirmEdit>
                                        </aside>
                                    </aside>
                                </>
                                {/* : */}
                                {/* <h1>LOADING</h1> */}
                                {/* } */}
                            </Modal>
                            {/* <BiEdit size="24px" color="white" /> */}
                            {/* <BiTrashAlt size="24px" color="white" /> */}
                        </div>
                        :
                        <></>
                }
            </TopBar>
            <UserDataBar>
                <h5>{username}</h5>
                <h5>{dateString}</h5>
            </UserDataBar>
            <p>{content}</p>
        </PostDiv>
    )
};

const PostDiv = styled.div`
    border: 1px solid #999999;
    border-radius: 16px;
    margin: 0 24px 24px 24px;
    p {
        padding: 0 24px 24px 24px;
    }
`

const TopBar = styled.div`
    background-color: #7695EC;
    border-radius: 16px 16px 0px 0px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        width: 86px;
        display: flex;
        justify-content: space-between;
        img {
            height: 30px;
        }
    }
`

const UserDataBar = styled.div`
    padding: 24px 24px 16px 24px;
    color: #777777;
    display: flex;
    justify-content: space-between;
`

const DeleteModalStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
    border-radius: 16px;
    border: 1px solid #999999;
    width: 660px;
    height: auto;
    padding: 24px;
    h3 {
        padding: 24px 0 8px 0;
    }
    input {
        border: 1px solid #777777;
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
        padding: 8px;
        font-size: 14px;
    }
    textarea::placeholder {
        font-size: 14px;
        color: #CCCCCC;
    }
    aside{
        width: 100%;
        display: flex;
        justify-content: end;
        padding-top: 12px;
        aside {
            width: 256px;
            display: flex;
            justify-content: space-between;
        }
    }
`

const DeleteOverlayStyle = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3500;
    background: rgba(119, 119, 119, 0.8);
`

const CancelDelete = styled.button`
    background-color: #FFFFFF;
    border: 1px solid #999999;
`

const ConfirmDelete = styled.button`
    background-color: #FF5151;
    color: #FFFFFF;
`

const ConfirmEdit = styled.button`
    background-color: #47B960;
    color: #FFFFFF;
`

export default PostModel;