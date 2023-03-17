import {
    Box,
    Button,
    Center, Checkbox, Collapse,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid,
    Text, Textarea, useDisclosure, useToast
} from "@chakra-ui/react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import UserSignUpReducer from "../../../reducers/user/UserSignUpReducer";
import UserActionCreator from "../../../actions/user/UserActionCreator";
import {useNavigate} from "react-router-dom";

export default function SignUpComponent(props) {
    const { isOpen, onToggle } = useDisclosure();
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('')

    function signUp() {
        if (!login || !email || !password || !repeatedPassword) {
            toast({
                title: 'Make sure you filled up all inputs!',
                status: "error",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });
        } else {
            dispatch(
                UserSignUpReducer.signUp(
                    UserActionCreator.signUp(
                        login,
                        email,
                        password,
                        repeatedPassword,
                        companyName,
                        companyDescription
                    )
                )
            );

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
                                <Text>
                                    Sign Up
                                </Text>
                            </Heading>
                        </Center>
                        <form action="src/components/authentication/signin">
                            <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>Login</FormLabel>
                                    <Input onChange={(e) => setLogin(e.target.value)} name={'login'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>E-mail</FormLabel>
                                    <Input onChange={(e) => setEmail(e.target.value)} type='email' name={'email'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>Password</FormLabel>
                                    <Input onChange={(e) => setPassword(e.target.value)} type='password' name={'password'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>Repeat Password</FormLabel>
                                    <Input onChange={(e) => setRepeatedPassword(e.target.value)} type='password' name={'repeatedPassword'} />
                                </FormControl>
                            </SimpleGrid>

                            <Checkbox onChange={onToggle}>As a recruiter</Checkbox>

                            <Collapse in={isOpen} animateOpacity>
                                <Box
                                    mt='4'
                                    rounded='md'
                                    shadow='md'
                                >
                                    <SimpleGrid columns={{sm: 1, md: 1, lg: 1}}>
                                        <FormControl>
                                            <FormLabel>Company name</FormLabel>
                                            <Input onChange={(e) => setCompanyName(e.target.value)} placeholder={'Company name'} name={'company'} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Company description</FormLabel>
                                            <Textarea onChange={(e) => setCompanyDescription(e.target.value)} resize={'none'} name={'description'} placeholder='Tell us about yourself' />
                                        </FormControl>
                                    </SimpleGrid>
                                </Box>
                            </Collapse>

                            <Center>
                                <Box m={'20px'}>
                                    <Button onClick={signUp} colorScheme='green'>Sign up</Button>
                                </Box>
                            </Center>
                        </form>
                    </Box>
                </Center>
            </Flex>
        </>
    );
}
