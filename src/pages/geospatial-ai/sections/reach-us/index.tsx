import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";
import { Container } from "./style";

import { Flex, Heading, P } from "../../../../components/basic";
import { Badge, Button } from "../../../../components/custom";
import useStore from "../../../../useStore";

const ReachUsSection = () => {

    const { T } = useStore();

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Container>
                <Flex
                    $style={{
                        fDirection: "column",
                        vAlign: "center"
                    }}
                >
                    <Flex
                        $style={{
                            fDirection: "column",
                            vAlign: "center",
                            maxW: "700px",
                            gap: "2rem",
                            queries: {
                                768: {
                                    gap: "1rem"
                                }
                            }
                        }}
                    >
                        <Badge>{T("geospatial.reach.badge")}</Badge>
                        <Heading level={1} $style={{
                            align: "center"
                        }}>{T("geospatial.reach.title")}</Heading>
                        <P $style={{
                            align: "center",
                            size: "20px",
                            queries: {
                                768: {
                                    size: "10px"
                                }
                            }
                        }}>{T("geospatial.reach.desc")}</P>
                        <Button $style={{
                            bg: GV("danger")
                        }}>{T("geospatial.reach.link")}</Button>
                    </Flex>
                </Flex>
            </Container>
        </motion.div>
    )
}

export default ReachUsSection;
