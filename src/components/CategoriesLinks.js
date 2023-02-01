import {Box, Container, Flex, HStack, Spacer} from "@chakra-ui/react";
import CategoryLink from "./CategoryLink";
import Filters from "./Filters";

export default function CategoriesLinks(props) {
    const categories = [
        'PHP',
        'Python'
    ];

    let renderedCategories = [];
    if (categories.length > 0) {
        categories.forEach(function (category) {
            renderedCategories.push(
                <CategoryLink key={category} link={category}></CategoryLink>
            );
        });
    }

    return (
        <>
            <Container maxW='full' maxH={150}>
                <Flex minWidth='max-content' gap='2'>
                    <Box m={2}>
                        <HStack>
                            {renderedCategories}
                        </HStack>
                    </Box>
                    <Spacer />
                    <Box m={3.5}>
                        <Filters />
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
