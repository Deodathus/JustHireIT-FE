import {useSelector} from "react-redux";
import PanelOfferRowComponent from "./offer/PanelOfferRowComponent";

export default function PanelHomeComponent() {
    const offers = useSelector(state => state.offers.elements);

    let renderedJobs = [];

    for (let i = 0; i < Object.keys(offers).length; i++) {
        renderedJobs.push(
            <PanelOfferRowComponent offer={Object.values(offers)[i]} key={i} />
        );
    }

    return (
        <>
            {renderedJobs}
        </>
    );
}
