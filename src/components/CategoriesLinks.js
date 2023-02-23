import {Box, Container, Flex, HStack, Spacer} from "@chakra-ui/react";
import Filters from "./Filters";
import {useSelector} from "react-redux";
import CategoryLink from "./CategoryLink";

export default function CategoriesLinks(props) {
    const categories = useSelector(state => state.offers.categories);

    let renderedCategories = [];
    if (categories.length > 0) {
        categories.forEach(function (category) {
            renderedCategories.push(
                <CategoryLink key={category.name} link={category.name}></CategoryLink>
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
