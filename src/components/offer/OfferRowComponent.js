import {Box, Center, SimpleGrid, Skeleton, VStack} from "@chakra-ui/react";
import OfferRequirement from "./requirements/OfferRequirement";
import OfferSalary from "./requirements/OfferSalary";
import OfferPropertyTypes from "../../dictionaries/offer/OfferPropertyTypes";

export default function OfferRowComponent(props) {
    const jobPost = props.jobPost;
    const requirements = [];
    let salary = {};

    for (let i = 0; i < Object.values(jobPost.requirements).length; i++) {
        let key = jobPost.id + '_' + Object.values(jobPost.requirements)[i].id;
        requirements.push(<OfferRequirement key={key} requirement={Object.values(jobPost.requirements)[i]} />);
    }

    for (let i = 0; i < Object.values(jobPost.properties).length; i++) {
        let property = Object.values(jobPost.properties)[i];

        if (property.type === OfferPropertyTypes.LOWEST_SALARY) {
            salary.lowestSalary = property.value;
        }

        if (property.type === OfferPropertyTypes.HIGHEST_SALARY) {
            salary.highestSalary = property.value;
        }
    }

    return (
        <>
            <SimpleGrid columns={{sm:3, md: 3, lg: 3}} className='jobRow'>
                <Center>
                    <Box>
                        <SimpleGrid columns={{sm:2, md: 2, lg: 2}}>
                            <Skeleton height={'50px'} width={'50px'} />
                            <span className={'companyName'}>{jobPost.companyName}</span>
                        </SimpleGrid>
                    </Box>
                </Center>
                <Center>
                    <Box>
                        {jobPost.name}
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
        </>
    );
}
