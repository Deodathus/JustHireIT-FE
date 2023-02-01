import {useRoutes} from "react-router";
import {useSelector} from "react-redux";
import IndexLayout from "./components/IndexLayout";
import OffersLayout from "./components/offer/OffersLayout";
import OffersList from "./components/offer/OffersList";
import OfferShowComponent from "./components/offer/single/OfferShowComponent";

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
            path: '/offers',
            element: <OffersLayout generalData={generalData} />,
            children : [
                { path: '/offers/categories/:category', element: <OffersList /> },
                { path: '/offers/:jobId/:offerId', element: <OfferShowComponent /> }
            ]
        },
    ]);
}