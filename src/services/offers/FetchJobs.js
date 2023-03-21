import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchJobs(token) {
    const api = justhire();

    return JusthireApiClient.get(api.fetchJobs, null, token);
}
