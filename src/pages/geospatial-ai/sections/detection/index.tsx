import React from "react";
import { motion } from "framer-motion";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Heading, P } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";

import DetectImg from "../../../../assets/illustration/detect/detect.svg";
import Detect1Img from "../../../../assets/illustration/detect/detect1.svg";
import Detect2Img from "../../../../assets/illustration/detect/detect2.svg";
import useStore from "../../../../useStore";

const DetectionSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                hAlign: "space-between",
                gap: "1rem",
                queries: {
                    768: {
                        fDirection: "column",
                        vAlign: "center",
                        gap: "3rem"
                    }
                }
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    gap: "2rem",
                    w: "55%",
                    queries: {
                        768: {
                            fDirection: "column",
                            vAlign: "center",
                            w: "100%",
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Badge>{T("geospatial.detection.badge")}</Badge>
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
                        }}>{T("geospatial.detection.title")}</Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Flex $style={{
                            gap: "2rem",
                            fDirection: "column",
                            vAlign: "flex-start",
                        }}>
                            <img src={Detect1Img} />
                            <P $style={{
                                size: "20px",
                                queries: {
                                    768: {
                                        align: "center",
                                        size: "10px"
                                    }
                                }
                            }}>{T("geospatial.detection.desc1")}</P>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Flex $style={{
                            gap: "2rem",
                            fDirection: "column",
                            vAlign: "flex-start",
                        }}>
                            <img src={Detect2Img} />
                            <P $style={{
                                size: "20px",
                                queries: {
                                    768: {
                                        align: "center",
                                        size: "10px"
                                    }
                                }
                            }}>{T("geospatial.detection.desc2")}</P>
                        </Flex>
                    </motion.div>
                </Flex>
                <Flex $style={{
                    queries: {
                        768: {
                            w: "70%"
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img src={DetectImg} alt="" />
                    </motion.div>
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default DetectionSection;
