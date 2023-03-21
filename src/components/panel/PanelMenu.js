import PanelMenuLink from "./PanelMenuLink";
import {FaDollarSign, FaEnvelope, FaHome, FaReadme, FaSlidersH} from "react-icons/all";
import {Box} from "@chakra-ui/react";

export default function PanelMenu(props) {
    return (
        <>
            <Box className={'panelMenu'}>
                <PanelMenuLink name={'Home'} link={'/panel/home'} icon={FaHome} />
                <PanelMenuLink name={'Job'} link={'/panel/job'} icon={FaReadme} />
                <PanelMenuLink name={'Offers'} link={'/panel/offers'} icon={FaEnvelope} />
                <PanelMenuLink name={'Billing'} link={'/panel/me/billing'} icon={FaDollarSign} />
                <PanelMenuLink name={'Setting'} link={'/panel/me'} icon={FaSlidersH} />
            </Box>
        </>
    );
}
