import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function SignIn(login, password) {
    const api = justhire();

    return JusthireApiClient.post(api.signin, {login, password});
}
