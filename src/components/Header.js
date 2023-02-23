import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Menu,
    MenuButton, MenuItem,
    MenuList,
    Spacer
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ChevronDownIcon, Icon} from "@chakra-ui/icons";
import {FaUser} from "react-icons/all";

export default function Header(props) {
    const titleCss = {
        color: '#4a5568'
    };

    const version = props.version;

    return (
        <>
            <Container maxW='full' maxH={150}>
                <Flex minWidth='max-content' gap='2'>
                    <Box m={2}>
                        <HStack>
                            <Heading as='h3' size='lg' style={titleCss}>
                                <Link to='/'>Just Hire IT</Link> <Badge colorScheme='purple'>v{version}</Badge>
                            </Heading>
                        </HStack>
                    </Box>
                    <Spacer />
                    <Box m={3.5}>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                <Icon as={FaUser} />
                            </MenuButton>
                            <MenuList>
                                <Link to={'/panel/home'}>
                                    <MenuItem>
                                        Panel
                                    </MenuItem>
                                </Link>
                                <Link to={'/panel/me'}>
                                    <MenuItem>
                                        User settings
                                    </MenuItem>
                                </Link>
                                <Link to={'/auth/logout'}>
                                    <MenuItem>
                                        Log out
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
