import {Badge, Box, Progress, Stat, StatLabel, StatNumber} from "@chakra-ui/react";

export default function OfferRequirement(props) {
    const name = props.requirement.name;
    const score = props.requirement.score;
    const fullVersion = props.fullVersion;

    if (fullVersion) {
        return (
            <>
                <Box>
                    <Stat>
                        <StatLabel>{name}</StatLabel>
                        <StatNumber className={'requirementProgressBar'}>
                            <Progress value={score * 20} />
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
