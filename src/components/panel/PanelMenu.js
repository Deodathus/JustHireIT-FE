import PanelMenuLink from "./PanelMenuLink";
import {FaDollarSign, FaHome} from "react-icons/all";
import {Box} from "@chakra-ui/react";

export default function PanelMenu(props) {
    return (
        <>
            <Box className={'panelMenu'}>
                <PanelMenuLink name={'Home'} link={'/panel'} icon={FaHome} />
                <PanelMenuLink name={'Billing'} link={'/panel/me/billing'} icon={FaDollarSign} />
            </Box>
        </>
    );
}
