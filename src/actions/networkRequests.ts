import axios from "axios";

const BASE_URL = "https://dev.codeleap.co.uk/careers";

function postText(username: string, title: string, content: string) {
    return axios.post(`${BASE_URL}/`, { username, title, content });
};

function getPosts(page: number) {
    return axios.get(`${BASE_URL}/?limit=10&offset=${page*10}`);
}

const networkRequests = {
    postText,
    getPosts,
};

export default networkRequests;