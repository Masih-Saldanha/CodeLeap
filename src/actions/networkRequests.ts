import axios from "axios";

const BASE_URL = "https://dev.codeleap.co.uk/careers";

function postText(username: string, title: string, content: string) {
    return axios.post(`${BASE_URL}/`, { username, title, content });
};

const networkRequests = {
    postText,
};

export default networkRequests;