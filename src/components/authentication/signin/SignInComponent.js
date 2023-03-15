import {Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, useToast} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import UserSignInReducer from "../../../reducers/user/UserSignInReducer";
import UserActionCreator from "../../../actions/user/UserActionCreator";

export default function SignInComponent(props) {
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function signIn() {
        if (!login || !password) {
            toast({
                title: 'Login or password was not provided!',
                status: "error",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });
        } else {
            dispatch(UserSignInReducer.signIn(
                UserActionCreator.signIn(login, password)
            ));

            navigate('/');
        }
    }

    return (
        <>
            <Flex width={"100vw"} height={"85vh"} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'centredBox'}>
                        <Center>
                            <Heading as={'h1'}>
                                Sign In
                            </Heading>
                        </Center>
                        <form action="/">
                            <FormControl className={'signInFormControl'}>
                                <FormLabel>Login</FormLabel>
                                <Input value={login} onChange={(e) => setLogin(e.target.value)} name={'login'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' name={'password'} />
                            </FormControl>

                            <Center>
                                <Box m={'15px'}>
                                    <Button onClick={signIn} colorScheme='green'>Sign in</Button>
                                </Box>
                            </Center>

                            <Center>
                                <Box>
                                    <Link className={'chakra-button'} to={'/auth/signup'}>
                                        Sign up
                                    </Link>
                                </Box>
                            </Center>
                        </form>
                    </Box>
                </Center>
            </Flex>
        </>
    );
}
