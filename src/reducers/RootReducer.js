import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import OffersReducer from "./offers/OffersReducer";
import UserReducer from "./user/UserReducer";
import JobsReducer from "./job/JobsReducer";

const rootReducer = combineReducers(
    {
        data: DataReducer,
        offers: OffersReducer,
        user: UserReducer,
        jobs: JobsReducer,
    }
);

export default rootReducer;