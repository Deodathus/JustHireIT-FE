import Types from "../../dictionaries/actions/Types";
import FetchJobsReducer from "./FetchJobsReducer";

export default function JobsReducer(state = [], action) {
    switch (action.type) {
        case Types.JOB.FETCH.ALL_FETCH_FINISHED:
            return FetchJobsReducer.fetchAllFinished(state, action);
        default:
            break;
    }

    return state;
}