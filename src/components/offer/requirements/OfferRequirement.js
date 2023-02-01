import {Badge} from "@chakra-ui/react";

export default function OfferRequirement(props) {
    const name = props.requirement.name;

    return (
        <>
            <Badge>{name}</Badge>
        </>
    );
}
