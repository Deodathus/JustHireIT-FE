import {Box, Center, SimpleGrid, Skeleton, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import OfferRequirement from "../../offer/requirements/OfferRequirement";
import OfferPropertyTypes from "../../../dictionaries/offer/OfferPropertyTypes";
import OfferSalary from "../../offer/requirements/OfferSalary";

export default function PanelOfferRowComponent(props) {
    const offer = props.offer;
    const requirements = [];
    let salary = {};

    for (let i = 0; i < Object.values(offer.requirements).length; i++) {
        let key = offer.id + '_' + Object.values(offer.requirements)[i].id;
        requirements.push(<OfferRequirement key={key} requirement={Object.values(offer.requirements)[i]} />);
    }

    for (let i = 0; i < Object.values(offer.properties).length; i++) {
        let property = Object.values(offer.properties)[i];

        if (property.type === OfferPropertyTypes.LOWEST_SALARY) {
            salary.lowestSalary = property.value;
        }

        if (property.type === OfferPropertyTypes.HIGHEST_SALARY) {
            salary.highestSalary = property.value;
        }
    }

    return (
        <>
            <Link to={'/offers/'+offer.jobId+'/'+offer.id}>
                <SimpleGrid columns={{sm:3, md: 3, lg: 3}} className='jobRow'>
                    <Center>
                        <Box>
                            <SimpleGrid columns={{sm:2, md: 2, lg: 2}}>
                                <Skeleton height={'50px'} width={'50px'} />
                                <span className={'companyName'}>{offer.companyName}</span>
                            </SimpleGrid>
                        </Box>
                    </Center>
                    <Center>
                        <Box>
                            {offer.name}
                        </Box>
                    </Center>
                    <Center>
                        <VStack>
                            <Box>
                                <OfferSalary salary={salary} />
                            </Box>
                            <Box>
                                {requirements}
                            </Box>
                        </VStack>
                    </Center>
                </SimpleGrid>
            </Link>
        </>
    );
}
