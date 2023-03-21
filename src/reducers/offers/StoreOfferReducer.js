import StoreJobOffer from "../../services/offers/StoreJobOffer";

function store(action) {
    return async function storeThunk(dispatch, setState) {
        await StoreJobOffer(action.payload)
            .then()
            .catch();
    }
}

export default {
    store,
}
