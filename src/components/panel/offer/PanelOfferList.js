import {useSelector} from "react-redux";
import PanelOfferRowComponent from "./PanelOfferRowComponent";
import {SimpleGrid} from "@chakra-ui/react";

export default function PanelOfferList(props) {
    const offers = useSelector(state => state.offers.elements);

    let renderedJobs = [];

    for (let i = 0; i < Object.keys(offers).length; i++) {
        renderedJobs.push(
            <PanelOfferRowComponent offer={Object.values(offers)[i]} key={i} />
        );
    }

    return (
        <>
            <SimpleGrid>
                {renderedJobs}
            </SimpleGrid>
        </>
    );
}
