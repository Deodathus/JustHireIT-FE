import {Box, SimpleGrid} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export default function PanelMeComponent() {
    const user = useSelector(state => state.user.me);

    return (
        <>
            <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                <Box m={10}>
                    E-mail: {user.email}
                </Box>
                <Box m={10}>
                    Team: {user.team}
                </Box>
                <Box m={10}>
                    Token: {user.token}
                </Box>
            </SimpleGrid>
        </>
    );
}
