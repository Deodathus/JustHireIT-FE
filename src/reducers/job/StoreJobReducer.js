import StoreJob from "../../services/offers/StoreJob";

function store(action) {
    return async function storeThunk(dispatch, setState) {
        await StoreJob(
            action.payload.name,
            action.payload.categoryId,
            action.payload.token
        )
            .then()
            .catch(error => {
                console.log(error);
            });
    }
}

export default {
    store
};
