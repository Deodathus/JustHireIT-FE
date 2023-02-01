import {Box, Center, SimpleGrid, VStack} from "@chakra-ui/react";
import OfferRequirement from "./requirements/OfferRequirement";

export default function OfferRowComponent(props) {
    const jobPost = props.jobPost;
    const requirements = [];

    for (let i = 0; i < Object.values(jobPost.requirements).length; i++) {
        let key = jobPost.id + '_' + Object.values(jobPost.requirements)[i].id;
        requirements.push(<OfferRequirement key={key} requirement={Object.values(jobPost.requirements)[i]} />);
    }

    return (
        <>
            <SimpleGrid columns={{sm:3, md: 3, lg: 3}} className='jobRow'>
                <Center>
                    <Box>
                        Company name
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
                            Salary and additional info
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
