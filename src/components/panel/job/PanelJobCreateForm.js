import {
    Box, Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid, useToast
} from "@chakra-ui/react";
import Select from 'react-select';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import StoreJobReducer from "../../../reducers/job/StoreJobReducer";
import JobStoreActionCreator from "../../../actions/jobs/JobStoreActionCreator";

export default function PanelJobCreateForm() {
    const categories = useSelector(state => state.offers.categories);
    const token = useSelector(state => state.user.me.token);
    const dispatch = useDispatch();
    const toast = useToast();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    function prepareCategories() {
        let preparedCategories = [];

        for (let i = 0; i < categories.length; i++) {
            preparedCategories.push({
                value: categories[i].id,
                label: categories[i].name
            });
        }

        return preparedCategories;
    }

    function handleCategoryChange(value) {
        setCategory(value);
    }

    function storeJob() {
        if (!name || !category) {
            toast({
                title: 'Name or category was not provided!',
                status: "error",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });
        } else {
            dispatch(
                StoreJobReducer.store(
                    JobStoreActionCreator.store(
                        name,
                        category.value,
                        token
                    )
                )
            );

            toast({
                title: 'Job was created!',
                status: "success",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });

            setName('');
            setCategory('');
        }
    }

    return (
        <>
            <Box>
                <Heading as={'h1'}>
                    Job
                </Heading>
                <form action="">
                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                        <FormControl className={'signUpFormControl'}>
                            <FormLabel>Name</FormLabel>
                            <Input onChange={(e) => setName(e.target.value)} value={name} name={'name'} />
                        </FormControl>
                        <Box></Box>
                        <FormControl className={'signUpFormControl'}>
                            <FormLabel>Category</FormLabel>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable={true}
                                name="category"
                                options={prepareCategories()}
                                onChange={handleCategoryChange}
                                value={category}
                            />
                        </FormControl>
                    </SimpleGrid>
                    <Box m={'20px'}>
                        <Button onClick={storeJob} colorScheme='green'>Create</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}
