import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function ApplyOnJobOffer(id, jobId, name, lastName, description, cv) {
    const api = justhire();

    return JusthireApiClient.post(
        api.fetchOffer.replace('{jobPostId}', id).replace('{jobId}', jobId),
        {
            name,
            lastName,
            description,
            cv
        }
    );
}
