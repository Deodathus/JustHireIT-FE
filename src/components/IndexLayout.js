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

export default function IndexLayout(props) {
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
