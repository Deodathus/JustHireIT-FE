import {
    Box, Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from "@chakra-ui/react";
import {useState} from "react";

export default function ApplicationFormComponent(props) {
    const applyFunction = props.applyFunction;

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [description, setDescription] = useState();
    const [cv, setCv] = useState();

    function apply() {
        applyFunction(name, lastName, description, cv);
    }

    return (
        <>
            <form action="">
                <FormControl className={'signUpFormControl'}>
                    <FormLabel>Name</FormLabel>
                    <Input onChange={(e) => setName(e.target.value)} value={name} name={'name'} />
                </FormControl>
                <FormControl className={'panelCreateOfferFormControl'}>
                    <FormLabel>Last name</FormLabel>
                    <Input onChange={(e) => setLastName(e.target.value)} value={lastName} name={'lastName'} />
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea onChange={(e) => setDescription(e.target.value)} value={description} name={'description'} placeholder='Tell something about you' />
                </FormControl>
                <FormControl>
                    <FormLabel>CV</FormLabel>
                    <Input onChange={(e) => setCv(e.target.files[0])} type={'file'} name={'cv'} placeholder='Tell something about you' />
                </FormControl>
                <Box m={'20px'}>
                    <Button onClick={apply} colorScheme='green'>Apply</Button>
                </Box>
            </form>
        </>
    );
}
