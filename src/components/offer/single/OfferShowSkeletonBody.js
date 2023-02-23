import {Box, Card, CardBody, SimpleGrid} from "@chakra-ui/react";
import SkeletonLine from "../../misc/skeleton/SkeletonLine";

export default function OfferShowSkeletonBody() {
    let skeletons = [];

    for (let i = 0;i < 2; i++) {
        skeletons.push(<SkeletonLine height={'20px'} width={'100%'} />);
    }

    return (
        <>
            <SimpleGrid columns={{sm:2, md: 2, lg: 2}} className={'offerShowBody'}>
                <Box>
                    <Box width='100%'>
                        <Card className={'offerShowCard'}>
                            <CardBody>
                                <SkeletonLine height={'20px'} width='80%' />
                            </CardBody>
                        </Card>

                        <Card className={'offerShowCard'}>
                            <CardBody>
                                {skeletons}
                                <SkeletonLine height={'20px'} width='65%' />
                                {skeletons}
                                <SkeletonLine height={'20px'} width='30%' />
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
                <Box>
                    <Box width='100%'>
                        <Card className={'offerShowCard'}>
                            <CardBody>
                                <SkeletonLine height={'20px'} width='65%' />
                            </CardBody>
                        </Card>

                        <Card className={'offerShowCard'}>
                            <CardBody>
                                <SimpleGrid columns={{sm: 2, md: 2, lg: 2}}>
                                    <Card className={'offerShowCard'}>
                                        <CardBody>
                                            <SkeletonLine height={'20px'} width='100%' />
                                        </CardBody>
                                    </Card>
                                    <Card className={'offerShowCard'}>
                                        <CardBody>
                                            <SkeletonLine height={'20px'} width='100%' />
                                        </CardBody>
                                    </Card>
                                </SimpleGrid>
                            </CardBody>
                        </Card>

                        <Card className={'offerShowCard'}>
                            <CardBody>
                                {skeletons}
                                <SkeletonLine height={'20px'} width='50%' />
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </SimpleGrid>
        </>
    );
}
