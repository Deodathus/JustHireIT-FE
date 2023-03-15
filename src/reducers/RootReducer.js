import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import OffersReducer from "./offers/OffersReducer";
import UserReducer from "./user/UserReducer";

const rootReducer = combineReducers(
    {
        data: DataReducer,
        offers: OffersReducer,
        user: UserReducer
    }
);

export default rootReducer;