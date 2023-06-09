import React from "react";
import { motion } from "framer-motion";
import { AppDevProcessContainer } from "./style";

import { Badge, Button } from "../../../../components/custom";
import { Flex, Heading, Link, P } from "../../../../components/basic";
import Subsection from "../../../../components/layout/subsection";

const AppDevProcessSection = () => {
    return (
        <Subsection>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 1 }}
            >
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
            </motion.div>
        </Subsection>
    )
}

export default AppDevProcessSection
