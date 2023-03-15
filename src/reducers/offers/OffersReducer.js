import Types from "../../dictionaries/actions/Types";
import OfferFetchReducer from "./OfferFetchReducer";
import OfferCategoryFetchReducer from "./OfferCategoryFetchReducer";

export default function OffersReducer(state = [], action) {
    switch (action.type) {
        case Types.OFFER.FETCH.ONE_STARTED:
            return OfferFetchReducer.fetchOneStarted(state, action);
        case Types.OFFER.FETCH.ONE_FINISHED:
            return OfferFetchReducer.fetchOneFinished(state, action);
        case Types.OFFER.FETCH.ALL_STARTED:
            return OfferFetchReducer.fetchAllStarted(state, action);
        case Types.OFFER.FETCH.ALL_FINISHED:
            return OfferFetchReducer.fetchAllFinished(state, action);
        case Types.OFFER.FETCH.ALL_ERROR:
            return OfferFetchReducer.fetchAllError(state, action);
        case Types.OFFER.FETCH.CATEGORY_FETCH_ALL_STARTED:
            return OfferCategoryFetchReducer.fetchAllStarted(state, action);
        case Types.OFFER.FETCH.CATEGORY_FETCH_ALL_ERROR:
            return OfferCategoryFetchReducer.fetchAllError(state, action);
        case Types.OFFER.FETCH.CATEGORY_FETCH_ALL_FINISHED:
            return OfferCategoryFetchReducer.fetchAllFinished(state, action);
        default:
            break;
    }

    return state;
}
