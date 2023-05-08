import axios from "axios";

const BASE_URL = "https://dev.codeleap.co.uk/careers";

function signUp(signUpData: string) {
    return axios.post(`${BASE_URL}/`, signUpData);
};

const networkRequests = {
    signUp,
};

export default networkRequests;