import Types from "../../dictionaries/actions/Types";
import SkillsReducer from "./SkillsReducer";

export default function CandidatesReducer(state = [], action) {
    switch (action.type) {
        case Types.CANDIDATE.SKILL.FETCH.ALL_FETCH_FINISHED:
            return SkillsReducer.fetchAllFinished(state, action);
        default:
            break;
    }

    return state;
}

