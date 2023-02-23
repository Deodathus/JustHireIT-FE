import Statuses from "../../dictionaries/actions/Statuses";
import FetchOfferCategories from "../../services/offers/FetchOfferCategories";
import OfferCategoryActionCreator from "../../actions/job/OfferCategoryActionCreator";

function fetchAll() {
    return async function fetchAllThunk(dispatch, getState) {
        dispatch(OfferCategoryActionCreator.fetchAllStarted());

        await FetchOfferCategories()
            .then(response => {
                dispatch(OfferCategoryActionCreator.fetchAllFinished(response.data, response.headers));
            }).catch(error => {
                dispatch(OfferCategoryActionCreator.fetchAllError(error));
            });
    }
}

function fetchAllStarted(state, action) {
    return {
        ...state,
        categoriesStatus: Statuses.started
    }
}

function fetchAllError(state, action) {
    console.log(action.payload);

    return {
        ...state,
        categoriesStatus: Statuses.error,
        categories: {}
    }
}

function fetchAllFinished(state, action) {
    return {
        ...state,
        categoriesStatus: Statuses.finished,
        categories: action.payload.categories
    }
}

export default {
    fetchAll,
    fetchAllStarted,
    fetchAllError,
    fetchAllFinished
}
