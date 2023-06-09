import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Heading, Link, List, ListItem } from "../../../../components/basic";
import { Badge, Panel } from "../../../../components/custom";

import Image1 from "../../../../assets/img/data-kind/1.png";
import Image2 from "../../../../assets/img/data-kind/2.png";
import Image3 from "../../../../assets/img/data-kind/3.png";

const DataKindSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "3rem",
                queries: {
                    768: {
                        gap: "1rem"
                    }
                }
            }}>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Badge>any kind of data</Badge>
                </motion.div>
                <Flex $style={{
                    maxW: "900px"
                }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 40 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <Heading level={1} $style={{
                            align: "center"
                        }}>Analyze your Unique, Multidimensional data.</Heading>
                    </motion.div>
                </Flex>
                <Flex $style={{
                    gap: "3.5rem",
                    queries: {
                        992: {
                            fDirection: "column"
                        },
                        768: {
                            w: "80%",
                            gap: "2rem"
                        }
                    }
                }}>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "5rem 0 0",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 40 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Panel>
                                <Flex $style={{
                                    fDirection: "column",
                                    vAlign: "center",
                                    gap: "3rem",
                                    queries: {
                                        768: {
                                            gap: "1rem"
                                        }
                                    }
                                }}>
                                    <img src={Image1} />
                                    <List>
                                        <ListItem $style={{
                                            size: "20px",
                                            queries: {
                                                768: {
                                                    size: "12px"
                                                }
                                            }
                                        }}>Full Motion Video</ListItem>
                                    </List>
                                </Flex>
                            </Panel>
                        </motion.div>
                    </Flex>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "0 0 5rem",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 40 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Panel>
                                <Flex $style={{
                                    fDirection: "column",
                                    vAlign: "center",
                                    gap: "3rem",
                                    queries: {
                                        768: {
                                            gap: "1rem"
                                        }
                                    }
                                }}>
                                    <img src={Image2} />
                                    <List>
                                        <ListItem $style={{
                                            size: "20px",
                                            queries: {
                                                768: {
                                                    size: "12px"
                                                }
                                            }
                                        }}>Geospatial Data</ListItem>
                                    </List>
                                </Flex>
                            </Panel>
                        </motion.div>
                    </Flex>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "5rem 0 0",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 40 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <Panel>
                                <Flex $style={{
                                    fDirection: "column",
                                    vAlign: "center",
                                    gap: "3rem",
                                    queries: {
                                        768: {
                                            gap: "1rem"
                                        }
                                    }
                                }}>
                                    <img src={Image3} />
                                    <List>
                                        <ListItem $style={{
                                            size: "20px",
                                            queries: {
                                                768: {
                                                    size: "12px"
                                                }
                                            }
                                        }}>Image Data</ListItem>
                                    </List>
                                </Flex>
                            </Panel>
                        </motion.div>
                    </Flex>
                </Flex>
                <motion.div
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Link to="" $style={{
                        color: GV("danger"),
                        textTransform: "uppercase"
                    }}>Learn More  →</Link>
                </motion.div>
            </Flex>
        </Subsection >
    )
}

export default DataKindSection;
