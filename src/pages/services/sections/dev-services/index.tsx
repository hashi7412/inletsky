import React from "react";
import { motion } from "framer-motion"
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import Grid from "../../../../components/basic/grid";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import Link from "../../../../components/basic/link";
import { Seperator } from "./styled";

import Image1 from "../../../../assets/illustration/services/1.svg";
import Image2 from "../../../../assets/illustration/services/2.svg";
import Image3 from "../../../../assets/illustration/services/3.svg";
import Image4 from "../../../../assets/illustration/services/4.svg";
import Image5 from "../../../../assets/illustration/services/5.svg";
import Image6 from "../../../../assets/illustration/services/6.svg";
import useStore from "../../../../useStore";

const DevServicesSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex
                $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "5.55rem",
                    p: "0 9.125rem",
                    mb: "7rem",
                    queries: {
                        1200: {
                            p: "0 1rem"
                        },
                    }
                }}
            >
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "0.5rem" }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Badge>{T("services.dev.badge")}</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Heading level={1} $style={{ align: "center" }}>{T("services.dev.title")}</Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <P $style={{ align: "center" }}>{T("services.dev.desc")}</P>
                    </motion.div>
                </Flex>
                <Flex
                    $style={{
                        gap: "1.875rem"
                    }}
                >
                    <Grid $style={{
                        columns: "3",
                        gap: "0 1.875rem",
                        queries: {
                            992: {
                                columns: "2"
                            },
                            768: {
                                columns: "1"
                            }
                        }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.0 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column"
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image1} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.1.title")}</Heading>
                                        <P>{T("services.dev.detail.1.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column-reverse",
                                    queries: {
                                        992: {
                                            fDirection: "column"
                                        }
                                    }
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image2} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.2.title")}</Heading>
                                        <P>{T("services.dev.detail.2.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column"
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image4} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.3.title")}</Heading>
                                        <P>{T("services.dev.detail.3.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column"
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image3} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.4.title")}</Heading>
                                        <P>{T("services.dev.detail.4.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column-reverse",
                                    queries: {
                                        992: {
                                            fDirection: "column"
                                        }
                                    }
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image5} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.5.title")}</Heading>
                                        <P>{T("services.dev.detail.5.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, translateY: 30 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            <Flex
                                $style={{
                                    h: "100%",
                                    fDirection: "column"
                                }}
                            >
                                <Panel>
                                    <Flex
                                        $style={{
                                            fDirection: "column",
                                            gap: "2rem"
                                        }}
                                    >
                                        <Flex $style={{ hAlign: "center" }}>
                                            <Flex $style={{ p: "1.375rem" }}>
                                                <img src={Image6} />
                                            </Flex>
                                        </Flex>
                                        <Heading level={4}>{T("services.dev.detail.6.title")}</Heading>
                                        <P>{T("services.dev.detail.6.desc")}</P>
                                    </Flex>
                                </Panel>
                                <Seperator />
                            </Flex>
                        </motion.div>
                    </Grid>
                </Flex>
                <Link to="" $style={{ color: GV("danger"), textTransform: "uppercase" }}>{T("services.dev.link")}</Link>
            </Flex>
        </Subsection>
    )
}

export default DevServicesSection;
