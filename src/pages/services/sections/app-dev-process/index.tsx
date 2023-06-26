import React from "react";
import { motion } from "framer-motion";
import { AppDevProcessContainer } from "./style";

import { Badge, Button } from "../../../../components/custom";
import { Flex, Heading, Link, P } from "../../../../components/basic";
import Subsection from "../../../../components/layout/subsection";
import useStore from "../../../../useStore";

const AppDevProcessSection = () => {

    const { T } = useStore();

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
                            <Badge>{T("services.process.badge")}</Badge>
                            <Heading level={1} $style={{ align: "center" }}>{T("services.process.title")}</Heading>
                        </Flex>
                        <P $style={{ align: "center" }}>{T("services.process.desc")}</P>
                        <Link to="">
                            <Button>{T("services.process.link")}</Button>
                        </Link>
                    </AppDevProcessContainer>
                </Flex>
            </motion.div>
        </Subsection>
    )
}

export default AppDevProcessSection
