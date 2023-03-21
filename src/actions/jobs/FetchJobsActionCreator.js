import Types from "../../dictionaries/actions/Types";

function fetchAll(token) {
    return {
        type: Types.JOB.FETCH.ALL_FETCH,
        payload: {
            token
        }
    };
}

function fetchAllFinished(jobs) {
    return {
        type: Types.JOB.FETCH.ALL_FETCH_FINISHED,
        payload: {
            jobs
        }
    };
}

export default {
    fetchAll,
    fetchAllFinished
};
