import {Box, Center, SimpleGrid, Skeleton} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function PanelJobRowComponent(props) {
    const job = props.job;
    const category = props.category

    return (
        <>
            <Link to={'/panel/job/'+job.id + '/edit'}>
                <SimpleGrid columns={{sm:2, md: 2, lg: 2}} className='jobRow'>
                    <Center>
                        <Box>
                            <SimpleGrid columns={{sm:2, md: 2, lg: 2}}>
                                <Skeleton height={'50px'} width={'50px'} />
                                <span className={'companyName'}>{job.name}</span>
                            </SimpleGrid>
                        </Box>
                    </Center>
                    <Center>
                        <Box>
                            {category.name}
                        </Box>
                    </Center>
                </SimpleGrid>
            </Link>
        </>
    );
}
