import {useRoutes} from "react-router";
import {useSelector} from "react-redux";
import IndexLayout from "./components/IndexLayout";
import OffersLayout from "./components/offer/OffersLayout";
import OffersList from "./components/offer/OffersList";
import OfferShowComponent from "./components/offer/single/OfferShowComponent";
import AuthLayout from "./components/authentication/AuthLayout";
import SignInComponent from "./components/authentication/signin/SignInComponent";
import SignUpComponent from "./components/authentication/signin/SignUpComponent";

export default function Router() {
    const version = useSelector(state => {
        return state.data.general.version;
    });
    const year = useSelector(state => {
        return state.data.general.year;
    });

    const generalData = {
        version,
        year
    };

    return useRoutes([
        {
            path: '/',
            element: <IndexLayout generalData={generalData} />,
        },
        {
            path: '/auth',
            element: <AuthLayout generalData={generalData} />,
            children: [
                { path: '/auth/signup', element: <SignUpComponent />},
                { path: '/auth/signin', element: <SignInComponent />}
            ]
        },
        {
            path: '/offers',
            element: <OffersLayout generalData={generalData} />,
            children: [
                { path: '/offers/categories/:category', element: <OffersList /> },
                { path: '/offers/:jobId/:offerId', element: <OfferShowComponent /> }
            ]
        },
    ]);
}