import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";

const PortfolioSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Our Recent Work</Badge>
                <Heading level={1}>Portfolio</Heading>
            </Flex>
            <P>Build. Launch. Grow</P>
            <Flex></Flex>
            <Flex></Flex>
        </Flex>
    )
}

export default PortfolioSection;
