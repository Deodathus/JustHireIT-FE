import Types from "../../dictionaries/actions/Types";

function fetchMe(token) {
    return {
        type: Types.USER.ME.FETCH.FETCH,
        payload: token
    };
}

function fetchMeFinished(login, email, team, features) {
    return {
        type: Types.USER.ME.FETCH.FINISHED,
        payload: {
            login,
            email,
            team,
            features
        }
    };
}

function fetchMeError(error) {
    return {
        type: Types.USER.ME.FETCH.ERROR,
        error: true,
        payload: error
    };
}

function signUp(login, email, password, repeatPassword, companyName, companyDescription) {
    return {
        type: Types.USER.SIGNUP.SIGNUP,
        payload: {
            login,
            email,
            password,
            repeatPassword,
            companyName,
            companyDescription,
        }
    };
}

function signUpFinished(token) {
    return {
        type: Types.USER.SIGNUP.FINISHED,
        payload: {
            token: token.apiToken
        }
    };
}

function signUpError(error) {
    return {
        type: Types.USER.SIGNUP.ERROR,
        error: true,
        payload: error
    };
}

function signIn(login, password) {
    return {
        type: Types.USER.SIGNIN,
        payload: {
            login,
            password
        }
    };
}

function signInError(error) {
    return {
        type: Types.USER.SIGNIN.ERROR,
        payload: error,
        error: true
    };
}

function signInFinished(token) {
    return {
        type: Types.USER.SIGNIN.FINISHED,
        payload: token
    };
}

export default {
    fetchMe,
    fetchMeFinished,
    fetchMeError,
    signIn,
    signInError,
    signInFinished,
    signUp,
    signUpFinished,
    signUpError
};
