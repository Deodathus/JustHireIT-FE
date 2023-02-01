import justhire from "../dictionaries/routes/api/justhire";
import JusthireApiClient from "./JusthireApiClient";

export default function PingService() {
    const api = justhire();

    return JusthireApiClient.get(api.ping);
}
