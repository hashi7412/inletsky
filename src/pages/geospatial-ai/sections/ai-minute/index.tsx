import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import { Flex, Heading, P, Link } from "../../../../components/basic";
import Subsection from "../../../../components/layout/subsection";
import { Badge } from "../../../../components/custom";

import Image from "../../../../assets/img/ai-in-minutes-not-months.png";
import { ImageWrapper } from "./style";

const AiMinuteSection = () => {
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
                            <Badge>say goodbye to labeling</Badge>
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
                            }}>AI in Minutes, Not Months.</Heading>
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
                            }}>You don’t really want AI, you want answers. Getting them today takes months - or years - and costs millions of dollars. What if you could get around the problem of needing massive amounts of human-labeled data? What if you could use AI to get critical insights - even when data is unstructured or sparse? Instead of needing months of human labeling to have some base AI performance in a new situation, RAIC can get to work immediately, radically reducing the latency between data collection and actionable insights.</P>
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
                    }}>Learn More  →</Link>
                </motion.div>
            </Flex>
        </Subsection>
    )
}

export default AiMinuteSection;
