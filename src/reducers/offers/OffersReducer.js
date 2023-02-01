import Types from "../../dictionaries/actions/job/Types";
import OfferFetchReducer from "./OfferFetchReducer";

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
    }

    return state;
}
