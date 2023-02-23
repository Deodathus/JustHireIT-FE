import Header from "../Header";
import {Box, Container, Divider, Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import {Outlet} from "react-router";
import Footer from "../Footer";
import PanelMenu from "./PanelMenu";

export default function PanelLayout(props) {
    const generalData = props.generalData;

    return (
        <>
            <Header version={generalData.version} />
            <Divider />
            <Container className={'content panelLayout'}>
                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>

                </SimpleGrid>
                <Grid
                    h='max-content'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1}>
                        <PanelMenu />
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2}>
                        <Box>
                            <Outlet />
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
            <Footer year={generalData.year}/>
        </>
    );
}