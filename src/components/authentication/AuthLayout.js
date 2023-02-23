import Header from "../Header";
import {Container, Divider} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Footer from "../Footer";

export default function AuthLayout(props) {
    const generalData = props.generalData;

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <Container className={'content'}>
                <Outlet />
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}
