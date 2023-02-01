import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import OfferFetchActionCreator from "../../../actions/job/OfferFetchActionCreator";
import OfferFetchReducer from "../../../reducers/offers/OfferFetchReducer";

export default function OfferShowComponent(props) {
    const dispatch = useDispatch();
    const { jobId, offerId } = useParams();

    const offer = useSelector(state => {
        return Object.values(state.offers.elements).find(offer => offer.id === parseInt(offerId));
    });

    if (offer == null) {
        console.log(offer == null);
        const fetchOneOffer = OfferFetchReducer.fetchOne(OfferFetchActionCreator.fetchOne(offerId, jobId));
        dispatch(fetchOneOffer);
    }
}
