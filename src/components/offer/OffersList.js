import OfferRowComponent from "./OfferRowComponent";
import {useSelector} from "react-redux";

export default function OffersList(props) {
    const offers = useSelector(state => state.offers.elements);

    let renderedJobs = [];

    for (let i = 0; i < Object.keys(offers).length; i++) {
        renderedJobs.push(
            <OfferRowComponent jobPost={Object.values(offers)[i]} key={i} />
        );
    }

    return (
        <>
            {renderedJobs}
        </>
    );
}
