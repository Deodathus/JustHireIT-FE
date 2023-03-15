import axios from "axios";
import Variables from "../dictionaries/actions/Variables";

function get(url, body, token = null) {
    if (!token) {
        token = sessionStorage.getItem(Variables.SESSION_STORAGE_API_TOKEN_KEY);
    }
    return axios.get(url, {
        params: body,
        headers: {
            'X-Auth-Token' : token
        }
    });
}

function post(url, body, token = null) {
    return axios.post(url, body, {
        headers: {
            'X-Auth-Token': token,
        }
    });
}

export default {
    get,
    post
}
