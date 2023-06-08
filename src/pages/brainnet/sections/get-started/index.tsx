import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Button from "../../../../components/custom/button";
import { AppDevProcessContainer } from "./style";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";

const GetStartedSection = () => {
    return (
        <Subsection>
            <Flex $style={{ p: "0 3.125rem", queries: { 992: { p: "0 1rem" } } }}>
                <AppDevProcessContainer>
                    <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                        <Badge>You’re Good to Go</Badge>
                        <Heading level={1} $style={{ align: "center" }}>Ready to Get Started</Heading>
                    </Flex>
                    <P $style={{ align: "center" }}>Create an account or talk to one of our experts.</P>
                    <Flex $style={{
                        gap: "3rem"
                    }}>
                        <Link to="">
                            <Button $style={{
                                border: GV("danger")
                            }}>Login →</Button>
                        </Link>
                        <Link to="">
                            <Button $style={{
                                bg: GV("danger")
                            }}>signup →</Button>
                        </Link>
                    </Flex>
                </AppDevProcessContainer>
            </Flex>
        </Subsection>
    )
}

export default GetStartedSection
