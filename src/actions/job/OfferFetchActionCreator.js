
import Types from "../../dictionaries/actions/job/Types";

function fetchOne(id, jobId) {
    return {
        type: Types.OFFER.FETCH.ONE_FETCH,
        payload: {
            id,
            jobId
        }
    }
}

function fetchOneStarted() {
    return {
        type: Types.OFFER.FETCH.ONE_STARTED
    }
}

function fetchOneFinished(jobPost) {
    return {
        type: Types.OFFER.FETCH.ONE_FINISHED,
        payload: jobPost
    };
}

function fetchOneError(error) {
    return {
        type: Types.OFFER.FETCH.ONE_ERROR,
        payload: error,
        error: 1
    }
}

function fetchAll(category = null, page = 1, perPage = 20) {
    return {
        type: Types.OFFER.FETCH.ALL_FETCH,
        payload: {
            page,
            perPage,
            category
        }
    };
}

function fetchAllStarted() {
    return {
        type: Types.OFFER.FETCH.ALL_STARTED
    };
}

function fetchAllFinished(jobPosts, headers) {
    return {
        type: Types.OFFER.FETCH.ALL_FINISHED,
        payload: jobPosts
    };
}

function fetchAllError(error) {
    return {
        type: Types.OFFER.FETCH.ALL_ERROR,
        error: 1,
        payload: error
    };
}

export default {
    fetchOne,
    fetchOneStarted,
    fetchOneFinished,
    fetchOneError,
    fetchAll,
    fetchAllStarted,
    fetchAllFinished,
    fetchAllError
}
