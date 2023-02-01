import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchOffer(id, jobId) {
    const api = justhire();

    return JusthireApiClient.get(api.fetch.replace('{jobPostId}', id).replace('{jobId}', jobId));
}
