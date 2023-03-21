import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function StoreJob(name, categoryId, token) {
    const api = justhire();

    return JusthireApiClient.post(
        api.storeJob,
        {
            name,
            categoryId
        },
        token
    );
}
