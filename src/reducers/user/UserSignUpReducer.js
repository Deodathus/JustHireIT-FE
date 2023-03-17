import UserActionCreator from "../../actions/user/UserActionCreator";
import SignUp from "../../services/user/SignUp";
import Variables from "../../dictionaries/actions/Variables";

function signUp(action) {
    return async function signUpThunk(dispatch, useState) {
        await SignUp(
            action.payload.login,
            action.payload.email,
            action.payload.password,
            action.payload.repeatPassword,
            action.payload.companyName,
            action.payload.companyDescription
        )
            .then(response => {
                dispatch(UserActionCreator.signUpFinished(response.data.apiToken));
            }).catch(
                error => {
                    console.log(error);
                    dispatch(UserActionCreator.signUpError(error));
                }
            );
    }
}

function signUpFinished(state, action) {
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
    signUp,
    signUpFinished
};
