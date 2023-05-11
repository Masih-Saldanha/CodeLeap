import axios from "axios";

const BASE_URL = "https://dev.codeleap.co.uk/careers";

function getPosts(page: number) {
    return axios.get(`${BASE_URL}/?limit=10&offset=${page * 10}`);
};

function postText(username: string, title: string, content: string) {
    return axios.post(`${BASE_URL}/`, { username, title, content });
};

function deletePost(postId: number) {
    const postIdString = String(postId);
    return axios.delete(`${BASE_URL}/${postIdString}/`);
};

function editPost(postId: number, title: string, content: string) {
    const postIdString = String(postId);
    return axios.patch(`${BASE_URL}/${postIdString}/`, { title, content });
};

const networkRequests = {
    getPosts,
    postText,
    deletePost,
    editPost,
};

export default networkRequests;