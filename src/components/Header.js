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
import {Link, useNavigate} from "react-router-dom";
import {ChevronDownIcon, Icon} from "@chakra-ui/icons";
import {FaUser} from "react-icons/all";
import {useSelector} from "react-redux";
import Variables from "../dictionaries/actions/Variables";
import {useState} from "react";

export default function Header(props) {
    const titleCss = {
        color: '#4a5568'
    };
    const version = props.version;
    const user = useSelector((state) => state.user.me);
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem(Variables.SESSION_STORAGE_API_TOKEN_KEY));

    let authLinks;

    if (user.token === token && token !== '') {
        authLinks = (
            <>
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
                <MenuItem onClick={logOut}>
                    Log out
                </MenuItem>
            </>
        );
    } else {
        authLinks = (
            <Link to={'/auth/signin'}>
                <MenuItem>
                    Sign in
                </MenuItem>
            </Link>
        );
    }

    function logOut() {
        sessionStorage.setItem(Variables.SESSION_STORAGE_API_TOKEN_KEY, '');
        setToken('');

        navigate('/');
    }

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
                                { authLinks }
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Container>
        </>
    );
}
