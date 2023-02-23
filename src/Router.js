import {useRoutes} from "react-router";
import {useSelector} from "react-redux";
import IndexLayout from "./components/IndexLayout";
import OffersLayout from "./components/offer/OffersLayout";
import OffersList from "./components/offer/OffersList";
import OfferShowComponent from "./components/offer/single/OfferShowComponent";
import AuthLayout from "./components/authentication/AuthLayout";
import SignInComponent from "./components/authentication/signin/SignInComponent";
import SignUpComponent from "./components/authentication/signup/SignUpComponent";
import PanelLayout from "./components/panel/PanelLayout";
import PanelBillingComponent from "./components/panel/me/billing/PanelBillingComponent";
import PanelRecruitmentList from "./components/panel/recruitment/PanelRecruitmentList";
import PanelOfferList from "./components/panel/offer/PanelOfferList";
import PanelHomeComponent from "./components/panel/PanelHomeComponent";
import PanelMeComponent from "./components/panel/me/PanelMeComponent";
import PanelOfferCreateForm from "./components/panel/offer/PanelOfferCreateForm";

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
                { path: '/auth/signup', element: <SignUpComponent /> },
                { path: '/auth/signin', element: <SignInComponent /> }
            ]
        },
        {
            path: '/panel',
            element: <PanelLayout generalData={generalData} />,
            children: [
                { path: '/panel/home', element: <PanelHomeComponent /> },
                { path: '/panel/me/billing', element: <PanelBillingComponent /> },
                { path: '/panel/recruitment', element: <PanelRecruitmentList /> },
                { path: '/panel/offer', element: <PanelOfferList/> },
                { path: '/panel/offer/create', element: <PanelOfferCreateForm />},
                { path: '/panel/me', element: <PanelMeComponent /> }
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