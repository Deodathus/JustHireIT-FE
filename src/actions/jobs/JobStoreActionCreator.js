import Types from "../../dictionaries/actions/Types";

function store(name, categoryId, token) {
    return {
        type: Types.JOB.STORE.STORE,
        payload: {
            name,
            categoryId,
            token
        }
    };
}

export default {
    store,
};
