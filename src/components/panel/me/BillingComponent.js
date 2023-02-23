import {Box, ListItem, SimpleGrid, UnorderedList} from "@chakra-ui/react";
import {useState} from "react";
import FeaturePlanComponent from "./billing/FeaturePlanComponent";

export default function BillingComponent(props) {
    const [plan, setPlan] = useState();

    let firstDescription =
        <>
            <UnorderedList>
                <ListItem>up to 2 active recruitments</ListItem>
                <ListItem>up to 6 active offers</ListItem>
                <ListItem>5/7 8h/day customer support service</ListItem>
            </UnorderedList>
        </>;

    let secondDescription =
        <>
            <UnorderedList>
                <ListItem>up to 5 active recruitments</ListItem>
                <ListItem>up to 15 active offers</ListItem>
                <ListItem>5/7 14h/day customer support service</ListItem>
                <ListItem>basic candidate exchange system</ListItem>
            </UnorderedList>
        </>;

    let thirdDescription =
        <>
            <UnorderedList>
                <ListItem>up to 15 active recruitments</ListItem>
                <ListItem>up to 45 active offers</ListItem>
                <ListItem>7/7 24h/day customer support service</ListItem>
                <ListItem>advanced candidate exchange system</ListItem>
            </UnorderedList>
        </>;

    return (
        <>
            <form action="">
                <SimpleGrid columns={{sm: 3, md: 3, lg: 3}}>
                    <Box className={'billingPlans'}>
                        <FeaturePlanComponent name={'Beginner'} description={firstDescription} setPlan={setPlan}  />
                    </Box>
                    <Box className={'billingPlans'}>
                        <FeaturePlanComponent name={'Pro'} description={secondDescription} setPlan={setPlan} />
                    </Box>
                    <Box className={'billingPlans'}>
                        <FeaturePlanComponent name={'Elite'} description={thirdDescription} setPlan={setPlan} />
                    </Box>
                </SimpleGrid>
            </form>
        </>
    );
}
