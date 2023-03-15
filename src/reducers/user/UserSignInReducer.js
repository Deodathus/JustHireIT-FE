import SignIn from "../../services/user/SignIn";
import UserActionCreator from "../../actions/user/UserActionCreator";
import Variables from "../../dictionaries/actions/Variables";

function signIn(action) {
    return async function signInThunk(dispatch, getState) {
        await SignIn(action.payload.login, action.payload.password)
            .then(response => {
                dispatch(UserActionCreator.signInFinished(response.data));
            }).catch(
                error => {
                    console.log(error);
                    dispatch(UserActionCreator.signInError(error));
                }
            )
    }
}

function signInFinished(state, action) {
    sessionStorage.setItem(Variables.SESSION_STORAGE_API_TOKEN_KEY, action.payload.token);

    return {
        ...state,
        me: {
            ...state.me,
            token: action.payload.token,
        }
    };
}

export default {
    signIn,
    signInFinished,
};