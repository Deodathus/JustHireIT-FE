import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchSkills(token) {
    const api = justhire();

    return JusthireApiClient.get(api.fetchSkills, {}, token);
}
