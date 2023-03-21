import {
    Box, Button, Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SimpleGrid
} from "@chakra-ui/react";
import Select from 'react-select';
import {useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router";

export default function PanelJobEditForm() {
    const categories = useSelector(state => state.offers.categories);
    const { jobId } = useParams();

    const job = useSelector(state => {
        return Object.values(state.jobs.elements).find((job) => {
            if (job.id === jobId) {
                return job;
            }
        });
    });

    const [name, setName] = useState(job ? job.name : '');
    const [category, setCategory] = useState(job ? job.categoryId : '');

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

    function prepareCategory() {
        let preparedCategory = {};

        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === category) {
                preparedCategory.value = category;
                preparedCategory.label = categories[i].name;
            }
        }

        return preparedCategory;
    }

    function handleCategoryChange(value) {
        setCategory(value);
    }

    if (job) {
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
                                    defaultValue={prepareCategory()}
                                />
                            </FormControl>
                        </SimpleGrid>
                        <Box m={'20px'}>
                            <Button colorScheme='green'>Update</Button>
                            <Button ml={5} colorScheme='blue'>Create job post</Button>
                        </Box>
                    </form>
                </Box>
            </>
        );
    } else {
        return (
            <>
                <Center>
                    Job was not found :-(
                </Center>
            </>
        );
    }
}
