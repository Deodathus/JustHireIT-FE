import {
    Box,
    Button,
    Center, Checkbox, Collapse,
    Fade,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid,
    Text, Textarea, useDisclosure
} from "@chakra-ui/react";

export default function SignUpComponent(props) {
    const { isOpen, onToggle } = useDisclosure();

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
                                    <Input name={'login'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>E-mail</FormLabel>
                                    <Input type='email' name={'email'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' name={'password'} />
                                </FormControl>
                                <FormControl className={'signUpFormControl'}>
                                    <FormLabel>Repeat Password</FormLabel>
                                    <Input type='password' name={'repeatedPassword'} />
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
                                            <Input name={'company'} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Company description</FormLabel>
                                            <Textarea resize={'none'} name={'description'} placeholder='Tell us about yourself' />
                                        </FormControl>
                                    </SimpleGrid>
                                </Box>
                            </Collapse>

                            <Center>
                                <Box m={'20px'}>
                                    <Button colorScheme='green'>Sign up</Button>
                                </Box>
                            </Center>
                        </form>
                    </Box>
                </Center>
            </Flex>
        </>
    );
}
