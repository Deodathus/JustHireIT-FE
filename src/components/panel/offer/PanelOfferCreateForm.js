import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    SimpleGrid,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
    Stat,
    StatLabel,
    StatNumber,
    Textarea,
    useToast
} from "@chakra-ui/react";
import Select from 'react-select';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import StoreOfferReducer from "../../../reducers/offers/StoreOfferReducer";
import StoreOfferActionCreator from "../../../actions/offers/StoreOfferActionCreator";

export default function PanelOfferCreateForm() {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [contractType, setContractType] = useState();
    const [lowestSalary, setLowestSalary] = useState(1);
    const [highestSalary, setHighestSalary] = useState(50000);
    const [requirementsContent, setRequirementsContent] = useState();
    const token = useSelector(state => state.user.me.token);
    const [chosenRequirements, setChosenRequirements] = useState([]);

    const requirements = useSelector(state => state.candidates.skills);
    const contractTypes = [
        { value: 'fulltime', label: 'Full time' },
        { value: 'parttime', label: 'Part time' },
        { value: 'errand', label: 'Errand' }
    ];
    const { jobId } = useParams();

    const job = useSelector(state => {
        return Object.values(state.jobs.elements).find((job) => {
            if (job.id === jobId) {
                return job;
            }
        });
    });

    const labelStyles = {
        mt: '2',
        ml: '-3.7',
        fontSize: 'sm',
    }

    const dispatch = useDispatch();
    const toast = useToast();

    function updateSalary(value) {
        setLowestSalary(value[0]);
        setHighestSalary(value[1]);
    }

    function prepareRequirements() {
        let preparedRequirements = [];

        for (let i = 0; i < requirements.length; i++) {
            preparedRequirements.push({
                value: requirements[i].id,
                label: requirements[i].name
            });
        }

        return preparedRequirements;
    }

    function handleChosenRequirement(value, requirementId) {
        let newChosenRequirements = [];

        for (let i = 0; i < chosenRequirements.length; i++) {
            newChosenRequirements.push({id: chosenRequirements[i].id, score: chosenRequirements[i].score});
        }

        newChosenRequirements.push({id: requirementId, score: value});

        setChosenRequirements(newChosenRequirements);
    }

    function displayRequirementsInputs(value) {
        let result;

        result = value.map((item) => {
            return (
                <FormControl key={item.value}>
                    <FormLabel htmlFor={'requirement-' + item.value}>
                        <span className="label"> { item.label + ' level:' } </span>
                    </FormLabel>
                    <Slider aria-label='slider-ex-1'
                            defaultValue={3} min={1} max={5}
                            onChange={(value) => handleChosenRequirement(value, item.value)}
                    >
                        <SliderMark value={2} {...labelStyles}>
                            2
                        </SliderMark>
                        <SliderMark value={3} {...labelStyles}>
                            3
                        </SliderMark>
                        <SliderMark value={4} {...labelStyles}>
                            4
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </FormControl>
            );
        });

        setRequirementsContent(result);

        let newRequirementsContent = [];
        Object.values(value).forEach(item => {
            newRequirementsContent.push({
                value: item.value,
                label: item.label
            });
        });
    }

    function storeJobOffer(e) {
        e.preventDefault();
        console.log(jobId);

        if (!name || !description || !contractType.value || !highestSalary || !lowestSalary || !chosenRequirements || !token) {
            toast({
                title: 'Make sure all fields are provided!',
                status: "error",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });
        } else {
            let properties = [
                {
                    type: 'DESCRIPTION',
                    value: description
                },
                {
                    type: 'LOWEST_SALARY',
                    value: lowestSalary + ' PLN'
                },
                {
                    type: 'HIGHEST_SALARY',
                    value: highestSalary + ' PLN'
                },
                {
                    type: 'CONTRACT_TYPE',
                    value: contractType.value
                }
            ];

            dispatch(
                StoreOfferReducer.store(
                    StoreOfferActionCreator.store(
                        name,
                        properties,
                        chosenRequirements,
                        token,
                        jobId
                    )
                )
            );

            toast({
                title: 'Offer created!',
                status: "success",
                isClosable: true,
                duration: 2000,
                position: "top-end"
            });
        }
    }

    function handleContractTypeChange(value) {
        setContractType(value);
    }

    return (
        <>
            <Box>
                <Heading as={'h1'}>
                    Offer {job ? 'on ' + job.name + ' position' : ''}
                </Heading>
                <form action="" onSubmit={storeJobOffer}>
                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                        <FormControl className={'signUpFormControl'}>
                            <FormLabel>Name</FormLabel>
                            <Input onChange={e => setName(e.target.value)} name={'name'} />
                        </FormControl>
                        <Box></Box>
                        <FormControl className={'signUpFormControl'}>
                            <FormLabel>Requirements</FormLabel>
                            <Select
                                isMulti
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable={true}
                                name="requirements"
                                options={prepareRequirements()}
                                onChange={displayRequirementsInputs}
                            />
                            <Box mt={5}>
                                {requirementsContent}
                            </Box>
                        </FormControl>
                        <Box>
                            <HStack className={'panelSalaryStack'}>
                                <Stat>
                                    <StatLabel>Lowest salary</StatLabel>
                                    <StatNumber>{lowestSalary ? lowestSalary : 1} PLN</StatNumber>
                                </Stat>
                                <Stat>
                                    <StatLabel>Highest salary</StatLabel>
                                    <StatNumber>{highestSalary ? highestSalary : 50000} PLN</StatNumber>
                                </Stat>
                            </HStack>
                        </Box>
                        <FormControl className={'panelCreateOfferFormControl'}>
                            <FormLabel>Contract type</FormLabel>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable={true}
                                name="contractType"
                                options={contractTypes}
                                onChange={handleContractTypeChange}
                            />
                        </FormControl>
                        <FormControl className={'panelCreateOfferFormControl'}>
                            <FormLabel>Salary</FormLabel>
                            <RangeSlider
                                aria-label={['min', 'max']}
                                min={1}
                                max={50000}
                                defaultValue={[1, 50000]} onChangeEnd={(value) => updateSalary(value)}
                            >
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                onChange={e => setDescription(e.target.value)}
                                name={'description'} placeholder='Describe the offer'
                            />
                        </FormControl>
                    </SimpleGrid>
                    <Box m={'20px'}>
                        <Button type={'submit'} colorScheme='green'>Create</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}
