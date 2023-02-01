import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function FetchOffers(page = 1, perPage = 20, category = null) {
    const api = justhire();

    return JusthireApiClient.get(
        api.fetchAll,
        {
            category
        }
    );
}