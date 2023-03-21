import Types from "../../dictionaries/actions/Types";


function fetchAll(token) {
    return {
        type: Types.CANDIDATE.SKILL.FETCH.ALL_FETCH,
        payload: {
            token
        }
    }
}

function fetchAllFinished(skills) {
    return {
        type: Types.CANDIDATE.SKILL.FETCH.ALL_FETCH_FINISHED,
        payload: {
            skills
        }
    }
}

export default {
    fetchAll,
    fetchAllFinished
};
