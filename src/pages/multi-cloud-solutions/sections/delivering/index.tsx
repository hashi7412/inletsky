import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Heading, P } from "../../../../components/basic";
import { Badge, Panel, Button, Input } from "../../../../components/custom";
import useStore from "../../../../useStore";

const DeliveringSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                gap: "2rem",
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
                    p: "5rem 0 0",
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
                    <Badge>{T("solution.hero.badge")}</Badge>
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
                    }}>{T("solution.delivering.title")}</Heading>
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
                                size: "14px",
                                align: "center",
                            },
                            600: {
                                size: "10px"
                            }
                        }
                    }}>{T("solution.delivering.desc1")}</P>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                    <P $style={{
                        size: "20px",
                        queries: {
                            768: {
                                size: "14px",
                                align: "center",
                            },
                            600: {
                                size: "10px"
                            }
                        }
                    }}>{T("solution.delivering.desc2")}</P>
                    </motion.div>
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <motion.div
                        initial={{ opacity: 0.5, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Panel>
                            <Flex $style={{
                                fDirection: "column",
                                gap: "2rem",
                                p: "5rem 0"
                            }}>
                                <Heading level={3}>{T("solution.delivering.form.title")}</Heading>
                                <P>{T("solution.delivering.form.desc")}</P>
                                <Input placeholder="Name*" value="" />
                                <Input placeholder="Email*" value="" />
                                <Button $style={{
                                    bg: GV("danger")
                                }}>Submit →</Button>
                            </Flex>
                        </Panel>
                    </motion.div>
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default DeliveringSection;
