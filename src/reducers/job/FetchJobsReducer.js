import FetchJobs from "../../services/offers/FetchJobs";
import FetchJobsActionCreator from "../../actions/jobs/FetchJobsActionCreator";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, setState) {
        await FetchJobs(action.payload.token)
            .then(response => {
                dispatch(
                    FetchJobsActionCreator.fetchAllFinished(response.data)
                );
            })
            .catch(error => {
                console.log(error);
            });
    }
}

function fetchAllFinished(state, action) {
    return {
        ...state,
        elements: action.payload.jobs.jobs
    }
}

export default {
    fetchAll,
    fetchAllFinished
};
