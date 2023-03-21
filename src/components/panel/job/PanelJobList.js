import {useNavigate} from "react-router-dom";
import {Button, Container, Flex, SimpleGrid, Spacer} from "@chakra-ui/react";
import {useEffect} from "react";
import OfferCategoryFetchReducer from "../../../reducers/offers/OfferCategoryFetchReducer";
import OfferCategoryActionCreator from "../../../actions/offers/OfferCategoryActionCreator";
import {useDispatch, useSelector} from "react-redux";
import FetchJobsReducer from "../../../reducers/job/FetchJobsReducer";
import FetchJobsActionCreator from "../../../actions/jobs/FetchJobsActionCreator";
import PanelJobRowComponent from "./PanelJobRowComponent";
import SkillsReducer from "../../../reducers/candidates/SkillsReducer";
import SkillsActionCreator from "../../../actions/candidates/SkillsActionCreator";

export default function PanelJobList(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.me.token);
    const jobs = useSelector(state => state.jobs.elements);
    const categories = useSelector(state => state.offers.categories);

    function goToOfferCreateForm() {
        navigate('/panel/job/create');
    }

    useEffect(() => {
        dispatch(
            OfferCategoryFetchReducer.fetchAll(
                OfferCategoryActionCreator.fetchAll(token)
            )
        )
    }, categories.values);

    useEffect(() => {
        dispatch(
            FetchJobsReducer.fetchAll(
                FetchJobsActionCreator.fetchAll()
            )
        )
    }, jobs.values);

    dispatch(
        SkillsReducer.fetchAll(
            SkillsActionCreator.fetchAll(token)
        )
    );

    let renderedJobs = [];
    if (jobs) {
        for (let i = 0; i < Object.keys(jobs).length; i++) {
            let job = Object.values(jobs)[i];

            renderedJobs.push(
                <PanelJobRowComponent category={findCategory(job.categoryId)} job={job} key={i} />
            );
        }
    }

    function findCategory(id) {
        for (let i = 0; i < Object.values(categories).length; i++) {
            if (Object.values(categories)[i].id === id) {
                return Object.values(categories)[i];
            }
        }
    }

    return (
        <>
            <Container className={'content panelLayout'}>
                <SimpleGrid>
                    { renderedJobs }
                </SimpleGrid>
                <Flex m={5}>
                    <Spacer />
                    <Button colorScheme={'green'} onClick={goToOfferCreateForm}>
                        Create
                    </Button>
                </Flex>
            </Container>
        </>
    );
}
