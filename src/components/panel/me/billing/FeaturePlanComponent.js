import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Text
} from "@chakra-ui/react";

export default function FeaturePlanComponent(props) {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.name}</Heading>
                        <Text>
                            {props.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {props.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <RadioGroup onChange={props.setPlan}>
                        <Stack direction='row'>
                            <Radio value='25'>0-25</Radio>
                            <Radio value='50'>25-50</Radio>
                            <Radio value='1000'>100+</Radio>
                        </Stack>
                    </RadioGroup>
                </CardFooter>
            </Card>
        </>
    );
}
