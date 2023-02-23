import {Badge, Box, Progress, Stat, StatLabel, StatNumber} from "@chakra-ui/react";

export default function OfferRequirement(props) {
    const name = props.requirement.name;
    const fullVersion = props.fullVersion;

    let requiredScore = Math.floor(Math.random() * 5);
    if (requiredScore === 0) {
        requiredScore = 20;
    } else {
        requiredScore = requiredScore * 20;
    }

    if (fullVersion) {
        return (
            <>
                <Box>
                    <Stat>
                        <StatLabel>{name}</StatLabel>
                        <StatNumber className={'requirementProgressBar'}>
                            <Progress value={requiredScore} />
                        </StatNumber>
                    </Stat>
                </Box>
            </>
        );
    }

    return (
        <>
            <Badge className={'requirementBadge'}>{name}</Badge>
        </>
    );
}
