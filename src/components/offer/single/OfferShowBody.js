import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    SimpleGrid,
    useDisclosure
} from "@chakra-ui/react";
import OfferRequirement from "../requirements/OfferRequirement";
import OfferPropertyTypes from "../../../dictionaries/offer/OfferPropertyTypes";
import OfferSalary from "../requirements/OfferSalary";
import ApplicationFormComponent from "../application/ApplicationFormComponent";
import {useDispatch, useSelector} from "react-redux";
import ApplyOnOfferActionCreator from "../../../actions/offers/ApplyOnOfferActionCreator";
import ApplyOnOfferReducer from "../../../reducers/offers/ApplyOnOfferReducer";

export default function OfferShowBody(props) {
    const offer = props.offer;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.me.token);

    const requirements = [];

    let description = 'The description is empty!';
    let salary = {};

    for (let i = 0; i < Object.values(offer.requirements).length; i++) {
        let key = offer.id + '_' + Object.values(offer.requirements)[i].id;
        requirements.push(
            <OfferRequirement fullVersion={true} key={key} requirement={Object.values(offer.requirements)[i]} />
        );
    }

    for (let i = 0; i < Object.values(offer.properties).length; i++) {
        let property = Object.values(offer.properties)[i];

        if (property.type === OfferPropertyTypes.LOWEST_SALARY) {
            salary.lowestSalary = property.value;
        }

        if (property.type === OfferPropertyTypes.HIGHEST_SALARY) {
            salary.highestSalary = property.value;
        }

        if (property.type === OfferPropertyTypes.DESCRIPTION) {
            description = property.value;
        }
    }

    function apply(name, lastName, description, cv) {
        dispatch(
            ApplyOnOfferReducer.apply(
                ApplyOnOfferActionCreator.apply(
                    offer.id,
                    offer.jobId,
                    name,
                    lastName,
                    description,
                    cv,
                    token
                )
            )
        );

        onClose();
    }

    return (
        <>
            <SimpleGrid columns={{sm:2, md: 2, lg: 2}} className={'offerShowBody'}>
                <Box>
                    <Box>
                        <Box>
                            <Card className={'offerShowCard'}>
                                <CardBody>
                                    Lil Develo
                                </CardBody>
                            </Card>
                        </Box>

                        <Card className={'offerShowCard'}>
                            <CardBody>
                                <Box className={'paragraph'}>
                                    Lil Develo is a cutting-edge startup company that specializes in developing job board applications.
                                    Our mission is to revolutionize the way job seekers find their dream jobs by creating a
                                    platform that is user-friendly, intuitive, and provides relevant job listings in real-time.
                                </Box>

                                <Box className={'paragraph'}>
                                    We understand the struggles that job seekers face in finding the right job,
                                    and we aim to solve that problem by creating a platform that simplifies the
                                    job search process. Our innovative job board application is designed to match
                                    job seekers with the best job opportunities that suit their skills and experience.
                                </Box>

                                <Box className={'paragraph'}>
                                    At Lil Develo, we pride ourselves on being a team of passionate developers who are
                                    committed to delivering a top-notch user experience. Our platform is built with the latest
                                    technologies and is constantly evolving to meet the changing needs of our users.
                                    Our goal is to make Lil Develo the go-to job board application for job seekers and employers alike.
                                    With our platform, employers can easily post job listings and find the right candidates quickly and efficiently.
                                    Job seekers can search for job opportunities based on their preferences, connect with employers,
                                    and apply for jobs seamlessly.
                                </Box>

                                <Box className={'paragraph'}>
                                    Join us on our journey to transform the job search process with Lil Develo.
                                </Box>
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Box>
                            <Card className={'offerShowCard'}>
                                <CardBody>
                                    {offer.name} <Badge colorScheme='green'>Full time</Badge>
                                </CardBody>
                            </Card>
                        </Box>
                        <Card className={'offerShowCard'}>
                            <CardBody>
                                <Card className={'offerShowCard offerDetailsCard'}>
                                    <CardBody>
                                        <Box>
                                            <OfferSalary salary={salary} />
                                        </Box>
                                    </CardBody>
                                </Card>
                                <Card className={'offerShowCard'}>
                                    <CardBody>
                                        <SimpleGrid columns={{sm:1, md: 1, lg: 3}}>
                                            {requirements}
                                        </SimpleGrid>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                        <Card className={'offerShowCard'}>
                            <CardBody>
                                {description}
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </SimpleGrid>
            <Center>
                <Box m={'20px'}>
                    <Button onClick={onOpen} colorScheme='green'>Apply</Button>
                </Box>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Apply on {offer.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ApplicationFormComponent applyFunction={apply} offer={offer} />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Center>
        </>
    );
}
