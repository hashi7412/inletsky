import React from "react";
import { motion } from "framer-motion"
import { GV } from "../../../../utils/style.util";
import { Container, ImageWrapper } from "./style";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Heading, P, Link } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";

import Image from "../../../../assets/img/new-standard-of-intelligence.png";
import useStore from "../../../../useStore";

const IntelligenceSection = () => {

    const { T } = useStore();

    return (
        <Container>
            <Subsection mb="0px">
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "2rem"
                }}>
                    <Flex $style={{
                        gap: "1rem",
                        queries: {
                            768: {
                                fDirection: "column-reverse",
                                gap: "2rem"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0.5, translateY: 150 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <ImageWrapper>
                                <img src={Image} />
                            </ImageWrapper>
                        </motion.div>
                        <Flex $style={{
                            fDirection: "column",
                            vAlign: "flex-end",
                            gap: "2rem",
                            p: "5rem 0 0"
                        }}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 20 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Badge>{T("geospatial.intel.badge")}</Badge>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 40 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <Heading level={1} $style={{
                                    align: "right",
                                    queries: {
                                        768: {
                                            align: "center"
                                        }
                                    }
                                }}>{T("geospatial.intel.title")}</Heading>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 50 }}
                                whileInView={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <P $style={{
                                    align: "right",
                                    size: "20px",
                                    queries: {
                                        768: {
                                            align: "center",
                                            size: "10px"
                                        }
                                    }
                                }}>{T("geospatial.intel.desc")}</P>
                            </motion.div>
                        </Flex>
                    </Flex>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Link to="" $style={{
                            color: GV("danger"),
                            textTransform: "uppercase"
                        }}>{T("geospatial.intel.link")}</Link>
                    </motion.div>
                </Flex>
            </Subsection>
        </Container>
    )
}

export default IntelligenceSection;
