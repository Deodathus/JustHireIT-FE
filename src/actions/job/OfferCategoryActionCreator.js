import Types from "../../dictionaries/actions/Types";

function fetchAll() {
    return {
        type: Types.OFFER.FETCH.CATEGORY_FETCH_ALL,
    };
}

function fetchAllStarted() {
    return {
        type: Types.OFFER.FETCH.CATEGORY_FETCH_ALL_STARTED
    };
}

function fetchAllFinished(categories) {
    return {
        type: Types.OFFER.FETCH.CATEGORY_FETCH_ALL_FINISHED,
        payload: categories
    };
}

function fetchAllError(error) {
    return {
        type: Types.OFFER.FETCH.CATEGORY_FETCH_ALL_ERROR,
        error: 1,
        payload: error
    };
}

export default {
    fetchAll,
    fetchAllStarted,
    fetchAllFinished,
    fetchAllError
}
