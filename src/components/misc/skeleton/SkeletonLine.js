import {Box, Skeleton} from "@chakra-ui/react";

export default function SkeletonLine(props) {
    const height = props.height;
    const width = props.width;

    return (
        <>
            <Box className={'skeletonLine'}>
                <Skeleton height={height} width={width} />
            </Box>
        </>
    );
}
