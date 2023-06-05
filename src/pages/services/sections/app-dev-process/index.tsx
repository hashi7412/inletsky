import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Button from "../../../../components/custom/button";

const AppDevProcessSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Need a Roadmap to a Seamless Web</Badge>
                <Heading level={1}>App Development Process</Heading>
            </Flex>
            <P>Schedule A 7-Day Trial To Witness Our Quality Standards</P>
            <Link to="">
                <Button>Discuss my web app development project →</Button>
            </Link>
        </Flex>
    )
}

export default AppDevProcessSection
