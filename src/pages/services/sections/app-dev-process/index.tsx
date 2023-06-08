import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Button from "../../../../components/custom/button";
import { AppDevProcessContainer } from "./style";
import Subsection from "../../../../components/layout/subsection";

const AppDevProcessSection = () => {
    return (
        <Subsection>
            <Flex $style={{ p: "0 3.125rem", queries: { 992: { p: "0 1rem" } } }}>
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
        </Subsection>
    )
}

export default AppDevProcessSection
