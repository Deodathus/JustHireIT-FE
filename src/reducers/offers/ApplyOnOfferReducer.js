import ApplyOnJobOffer from "../../services/offers/ApplyOnJobOffer";
import ApplyOnOfferActionCreator from "../../actions/offers/ApplyOnOfferActionCreator";

function apply(action) {
    return async function applyThunk(dispatch, setState) {
        await ApplyOnJobOffer(
            action.payload.id,
            action.payload.jobId,
            action.payload.name,
            action.payload.lastName,
            action.payload.description,
            action.payload.cv,
            action.payload.token
        )
            .then(response => {
                dispatch(ApplyOnOfferActionCreator.applyFinished());
            })
            .catch(error => {
                console.log(error);
                dispatch(ApplyOnOfferActionCreator.applyError(error));
            });
    }
}

function applyFinished(state, action) {
    return state;
}

export default {
    apply,
    applyFinished
};
