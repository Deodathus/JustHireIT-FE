import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import OffersReducer from "./offers/OffersReducer";

const rootReducer = combineReducers(
    {
        data: DataReducer,
        offers: OffersReducer
    }
);

export default rootReducer;