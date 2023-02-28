import {
    Box, Button,
    FormControl,
    FormLabel,
    Heading, HStack,
    Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack,
    SimpleGrid, Stat, StatLabel, StatNumber, Textarea
} from "@chakra-ui/react";
import Select from 'react-select';
import {useState} from "react";

export default function PanelOfferCreateForm() {
    const [lowestSalary, setLowestSalary] = useState();
    const [highestSalary, setHighestSalary] = useState();

    const requirements = [
        { value: 'php', label: 'PHP' },
        { value: 'mysql', label: 'MySQL' },
        { value: 'ddd', label: 'DDD' },
        { value: 'CQRS', label: 'CQRS' },
        { value: 'redis', label: 'Redis' }
    ];
    const contractTypes = [
        { value: 'fulltime', label: 'Full time' },
        { value: 'parttime', label: 'Part time' },
        { value: 'errand', label: 'Errand' }
    ];

    function updateSalary(value) {
        setLowestSalary(value[0]);
        setHighestSalary(value[1]);
    }

    return (
        <>
            <Box>
                <Heading as={'h1'}>
                    Offer
                </Heading>
                <form action="src/components/authentication/signin">
                    <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                        <FormControl className={'signUpFormControl'}>
                            <FormLabel>Name</FormLabel>
                            <Input name={'name'} />
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
                                options={requirements}
                            />
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
                            <Textarea name={'description'} placeholder='Describe the offer' />
                        </FormControl>
                    </SimpleGrid>
                    <Box m={'20px'}>
                        <Button colorScheme='green'>Create</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}
