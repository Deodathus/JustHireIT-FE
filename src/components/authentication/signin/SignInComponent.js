import {Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function SignInComponent(props) {
    return (
        <>
            <Flex width={"100vw"} height={"85vh"} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box boxShadow='2xl' rounded='md' bg='white' className={'loginBox'}>
                        <Center>
                            <Heading as={'h1'}>
                                Sign In
                            </Heading>
                        </Center>
                        <form action="">
                            <FormControl className={'signInFormControl'}>
                                <FormLabel>Login</FormLabel>
                                <Input name={'login'} />
                            </FormControl>
                            <FormControl className={'signInFormControl'}>
                                <FormLabel>E-mail</FormLabel>
                                <Input type='email' name={'email'} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' name={'password'} />
                            </FormControl>

                            <Center>
                                <Box m={'15px'}>
                                    <Button colorScheme='green'>Sign in</Button>
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
