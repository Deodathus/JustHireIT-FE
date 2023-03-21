import Types from "../../dictionaries/actions/Types";

function store(name, properties, requirements, token, jobId) {
    return {
        type: Types.OFFER.STORE.STORE,
        payload: {
            name,
            properties,
            requirements: requirements,
            token,
            jobId
        }
    };
}

export default {
    store
};
