import axios from "axios";

function get(url, body) {
    return axios.get(url, {
        params: body,
        headers: {
            'X-Auth-Token' : process.env.REACT_APP_JUSTHIRE_API_TOKEN
        }
    });
}

export default {
    get
}
