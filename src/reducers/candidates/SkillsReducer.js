import FetchSkills from "../../services/candidate/FetchSkills";
import SkillsActionCreator from "../../actions/candidates/SkillsActionCreator";

function fetchAll(action) {
    return async function fetchAllThunk(dispatch, setState) {
        await FetchSkills(action.payload.token)
            .then(response => {
                dispatch(SkillsActionCreator.fetchAllFinished(response.data.skills));
            }).catch(error => {
               console.log(error);
            });
    }
}

function fetchAllFinished(state, action) {
    return {
        ...state,
        skills: action.payload.skills
    }
}

export default {
    fetchAll,
    fetchAllFinished
};
