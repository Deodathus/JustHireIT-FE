import {combineReducers} from "redux";
import DataReducer from "./DataReducer";
import OffersReducer from "./offers/OffersReducer";
import UserReducer from "./user/UserReducer";
import JobsReducer from "./job/JobsReducer";
import CandidatesReducer from "./candidates/CandidatesReducer";

const rootReducer = combineReducers(
    {
        data: DataReducer,
        offers: OffersReducer,
        user: UserReducer,
        jobs: JobsReducer,
        candidates: CandidatesReducer,
    }
);

export default rootReducer;