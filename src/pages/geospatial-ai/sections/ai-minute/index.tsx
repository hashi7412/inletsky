import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import { Flex, Heading, P, Link } from "../../../../components/basic";
import Subsection from "../../../../components/layout/subsection";
import { Badge } from "../../../../components/custom";

import Image from "../../../../assets/img/ai-in-minutes-not-months.png";
import { ImageWrapper } from "./style";
import useStore from "../../../../useStore";

const AiMinuteSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "4rem"
            }}>
                <Flex $style={{
                    gap: "2rem",
                    queries: {
                        768: {
                            fDirection: "column",
                            vAlign: "center"
                        }
                    }
                }}>
                    <Flex $style={{
                        flex: "10",
                        fDirection: "column",
                        vAlign: "flex-start",
                        gap: "2rem",
                        queries: {
                            768: {
                                vAlign: "center"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Badge>{T("geospatial.minute.badge")}</Badge>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 40 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Heading level={1} $style={{
                                queries: {
                                    768: {
                                        align: "center"
                                    }
                                }
                            }}>{T("geospatial.minute.title")}</Heading>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <P $style={{
                                size: "20px",
                                queries: {
                                    768: {
                                        align: "center",
                                        size: "10px"
                                    }
                                }
                            }}>{T("geospatial.minute.desc")}</P>
                        </motion.div>
                    </Flex >
                    <ImageWrapper>
                        <motion.div
                            initial={{ opacity: 0, translateX: 50 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src={Image} />
                        </motion.div>
                    </ImageWrapper>
                </Flex>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Link to="" $style={{
                        color: GV("danger"),
                        textTransform: "uppercase"
                    }}>{T("geospatial.minute.link")}</Link>
                </motion.div>
            </Flex>
        </Subsection>
    )
}

export default AiMinuteSection;
