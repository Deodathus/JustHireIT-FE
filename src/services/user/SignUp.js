import justhire from "../../dictionaries/routes/api/justhire";
import JusthireApiClient from "../JusthireApiClient";

export default function SignUp(login, email, password, repeatPassword, companyName, companyDescription) {
    const api = justhire();

    return JusthireApiClient.post(api.signup, {
        login, email, password, repeatPassword, companyName, companyDescription
    });
}
