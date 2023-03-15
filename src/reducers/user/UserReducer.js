import Types from "../../dictionaries/actions/Types";
import UserSignInReducer from "./UserSignInReducer";
import UserMeReducer from "./UserMeReducer";

export default function UserReducer(state = [], action) {
    switch (action.type) {
        case Types.USER.SIGNIN.FINISHED:
            return UserSignInReducer.signInFinished(state, action);
        case Types.USER.ME.FETCH.FINISHED:
            return UserMeReducer.fetchMeFinished(state, action);
        case Types.USER.ME.FETCH.ERROR:
            return UserMeReducer.fetchMeError(state, action);
        default:
            break;
    }

    return state;
}
