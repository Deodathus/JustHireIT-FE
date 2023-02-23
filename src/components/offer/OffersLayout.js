import Header from "../Header";
import {Container, Divider} from "@chakra-ui/react";
import CategoriesLinks from "../CategoriesLinks";
import {Outlet, useParams} from "react-router";
import Footer from "../Footer";
import {useEffect} from "react";
import OfferFetchReducer from "../../reducers/offers/OfferFetchReducer";
import OfferFetchActionCreator from "../../actions/job/OfferFetchActionCreator";
import {useDispatch} from "react-redux";
import OfferCategoryFetchReducer from "../../reducers/offers/OfferCategoryFetchReducer";
import OfferCategoryActionCreator from "../../actions/job/OfferCategoryActionCreator";

export default function OffersLayout(props) {
    const generalData = props.generalData;

    const dispatch = useDispatch();
    const {category} = useParams();

    useEffect(() => {
        dispatch(
            OfferFetchReducer.fetchAll(
                OfferFetchActionCreator.fetchAll(
                    category
                )
            )
        )
    });
    useEffect(() => {
        dispatch(
            OfferCategoryFetchReducer.fetchAll(
                OfferCategoryActionCreator.fetchAll()
            )
        )
    });

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <CategoriesLinks />
            <Divider />
            <Container className={'content'}>
                <Outlet />
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}