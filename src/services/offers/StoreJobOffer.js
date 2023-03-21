import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function StoreJobOffer(name, properties, requirements, token, jobId) {
    const api = justhire();

    return JusthireApiClient.post(api.storeJobPost.replace('{jobId}', jobId), {
        name,
        properties,
        requirements
    }, token);
}
