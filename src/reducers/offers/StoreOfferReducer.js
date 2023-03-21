import StoreJobOffer from "../../services/offers/StoreJobOffer";

function store(action) {
    return async function storeThunk(dispatch, setState) {
        await StoreJobOffer(
            action.payload.name,
            action.payload.properties,
            action.payload.requirements,
            action.payload.token,
            action.payload.jobId
        )
            .then()
            .catch(
                error => {
                    console.log(error);
                }
            );
    }
}

export default {
    store,
}
