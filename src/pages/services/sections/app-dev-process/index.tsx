import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Button from "../../../../components/custom/button";
import { AppDevProcessContainer } from "./style";

const AppDevProcessSection = () => {
    return (
        <Flex $style={{ p: "0 3.125rem", mb: "7rem" }}>
            <AppDevProcessContainer>
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                    <Badge>Need a Roadmap to a Seamless Web</Badge>
                    <Heading level={1} $style={{ align: "center" }}>App Development Process</Heading>
                </Flex>
                <P $style={{ align: "center" }}>Schedule A 7-Day Trial To Witness Our Quality Standards</P>
                <Link to="">
                    <Button>Discuss my web app development project →</Button>
                </Link>
            </AppDevProcessContainer>
        </Flex>
    )
}

export default AppDevProcessSection
