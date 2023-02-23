import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchOfferCategories() {
    const api = justhire();

    return JusthireApiClient.get(api.fetchAllJobCategories);
}