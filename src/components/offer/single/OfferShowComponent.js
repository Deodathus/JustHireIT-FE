import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import OfferFetchActionCreator from "../../../actions/job/OfferFetchActionCreator";
import OfferFetchReducer from "../../../reducers/offers/OfferFetchReducer";
import OfferShowSkeletonBody from "./OfferShowSkeletonBody";
import OfferShowBody from "./OfferShowBody";

export default function OfferShowComponent(props) {
    const dispatch = useDispatch();
    const { jobId, offerId } = useParams();

    const offer = useSelector(state => {
        return Object.values(state.offers.elements).find((offer) => {
            if (offer.id === offerId) {
                return offer;
            }
        });
    });

    if (offer == null) {
        const fetchOneOffer = OfferFetchReducer.fetchOne(OfferFetchActionCreator.fetchOne(offerId, jobId));
        dispatch(fetchOneOffer);

        return <OfferShowSkeletonBody />;
    }

    return <OfferShowBody offer={offer} />
}
