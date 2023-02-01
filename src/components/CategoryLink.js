import {Box, Heading, VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Icon} from "@chakra-ui/icons";
import IconsMap from "../dictionaries/CategoryIcons";

export default function CategoryLink(props) {
    const link = props.link;
    let categoryIcon = IconsMap(link.toLowerCase());

    return (
        <>
            <Box>
                <Heading as={'h5'} size={'xl'} marginLeft={2} >
                    <Link to={'/offers/categories/' + link.toLowerCase()}>
                        <VStack>
                            <Icon as={categoryIcon} />
                            <span className='categoryName'>{link}</span>
                        </VStack>
                    </Link>
                </Heading>
            </Box>
        </>
    );
}
