import {useRoutes} from "react-router";
import {useSelector} from "react-redux";
import IndexLayout from "./components/IndexLayout";

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
        }
    ]);
}