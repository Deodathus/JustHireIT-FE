import Types from "../../dictionaries/actions/Types";

function apply(id, jobId, name, lastName, description, cv) {
    return {
        type: Types.OFFER.APPLY.APPLY_FINISHED,
        payload: {
            id,
            jobId,
            name,
            lastName,
            description,
            cv
        }
    }
}

function applyFinished() {
    return {
        type: Types.OFFER.APPLY.APPLY_FINISHED,
    }
}

function applyError(error) {
    return {
        type: Types.OFFER.APPLY.APPLY_ERROR,
        payload: {
            error
        },
        error: 1
    };
}

export default {
    apply,
    applyFinished,
    applyError
};
