import Header from "./Header";
import CategoriesLinks from "./CategoriesLinks";
import {Container, Divider} from "@chakra-ui/react";
import OffersList from "./offer/OffersList";
import {Outlet, useParams} from "react-router";
import Footer from "./Footer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import OfferFetchReducer from "../reducers/offers/OfferFetchReducer";
import OfferFetchActionCreator from "../actions/job/OfferFetchActionCreator";
import OfferCategoryFetchReducer from "../reducers/offers/OfferCategoryFetchReducer";
import OfferCategoryActionCreator from "../actions/job/OfferCategoryActionCreator";

export default function IndexLayout(props) {
    const dispatch = useDispatch();

    const generalData = props.generalData;
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
                <OffersList />
                <Outlet />
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}
