import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchMe(token) {
    const api = justhire();

    return JusthireApiClient.get(api.fetchMe, null, token);
}
