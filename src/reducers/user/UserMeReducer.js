import FetchMe from "../../services/user/FetchMe";
import UserActionCreator from "../../actions/user/UserActionCreator";
import Variables from "../../dictionaries/actions/Variables";

function fetchMe(action) {
    return async function fetchMeThunk(dispatch, getState) {
        const apiToken = action.payload;

        if (apiToken !== '') {
            await FetchMe(apiToken)
                .then(response => {
                    dispatch(UserActionCreator.fetchMeFinished(
                        response.data.login,
                        response.data.email,
                        response.data.team,
                        response.data.features,
                    ));
                })
                .catch(error => {
                    console.log(error);
                    dispatch(UserActionCreator.fetchMeError(error));
                });
        }
    }
}

function fetchMeFinished(state, action) {
    return {
        ...state,
        me: {
            ...state.me,
            email: action.payload.email,
            team: action.payload.team,
            features: action.payload.features,
        }
    };
}

function fetchMeError(state, action) {
    sessionStorage.setItem(Variables.SESSION_STORAGE_API_TOKEN_KEY, '');

    return {
        ...state,
        me: {}
    }
}

export default {
    fetchMe,
    fetchMeFinished,
    fetchMeError
};
