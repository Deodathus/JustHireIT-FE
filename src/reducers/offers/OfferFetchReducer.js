import Statuses from "../../dictionaries/actions/Statuses";
import OfferFetchActionCreator from "../../actions/job/OfferFetchActionCreator";
import FetchOffer from "../../services/offers/FetchOffer";
import FetchOffers from "../../services/offers/FetchOffers";

function fetchOne(action) {
    return async function fetchOneThunk(dispatch, getState) {
        dispatch(OfferFetchActionCreator.fetchOneStarted());

        await FetchOffer(action.payload.id, action.payload.jobId)
            .then(response => {
                dispatch(OfferFetchActionCreator.fetchOneFinished(response.data));
            }).catch(error => {
                console.log(error);
                dispatch(OfferFetchActionCreator.fetchOneError(error));
            });
    }
}

function fetchOneStarted(state, action) {
    return {
        ...state,
        processes: {
            ...state.processes,
            fetchOne: {
                ...state.processes.fetchOne,
                status: Statuses.started
            }
        }
    }
}

function fetchOneFinished(state, action) {
    const jobPost = action.payload.jobPost;
    const allElements = {...state.elements};

    allElements[jobPost.id] = jobPost;

    return {
        ...state,
        elements: allElements,
        processes: {
            ...state.processes,
            fetchOne: {
                ...state.processes.fetchOne,
                status: Statuses.finished
            }
        }
    };
}

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, getState) {
        dispatch(OfferFetchActionCreator.fetchAllStarted());

        await FetchOffers(action.payload.page, action.payload.perPage, action.payload.category)
            .then(response => {
                dispatch(OfferFetchActionCreator.fetchAllFinished(response.data, response.headers));
            }).catch(error => {
                dispatch(OfferFetchActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllStarted(state, action) {
    return {
        ...state,
        status: Statuses.started
    }
}

function fetchAllError(state, action) {
    console.log(action.payload);

    return {
        ...state,
        status: Statuses.error,
        elements: {}
    }
}

function fetchAllFinished(state, action) {

    return {
        ...state,
        status: Statuses.finished,
        elements: action.payload.jobPosts
    }
}

export default {
    fetchOne,
    fetchOneStarted,
    fetchOneFinished,
    fetchAll,
    fetchAllStarted,
    fetchAllError,
    fetchAllFinished
}