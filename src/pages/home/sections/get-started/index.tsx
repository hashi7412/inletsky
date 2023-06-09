import React from "react";
import { motion } from "framer-motion";
import { AppDevProcessContainer } from "./style";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Button from "../../../../components/custom/button";

const GetStartedSection = () => {
    return (
        <Subsection>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 1 }}
            >
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
            </motion.div>
        </Subsection>
    )
}

export default GetStartedSection
