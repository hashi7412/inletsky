import React from "react";
import { motion } from "framer-motion";
import { ImageWrapper } from "./style";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import { Flex, Grid, Link, Heading, P } from "../../../../components/basic";
import { Panel } from "../../../../components/custom";

import Image from "../../../../assets/img/data-kind/2.png";
import useStore from "../../../../useStore";

const EnvironmentSection = () => {

    const { T } = useStore();

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Subsection>
                <Grid $style={{
                    columns: "2",
                    gap: "3rem",
                    p: "0 2rem",
                    queries: {
                        922: {
                            columns: "1"
                        }
                    }
                }}>
                    <Panel>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "3.5rem",
                            queries: {
                                768: {
                                    gap: "1.5rem"
                                }
                            }
                        }}>
                            <ImageWrapper>
                                <img src={Image} />
                            </ImageWrapper>
                            <Heading level={4}>{T("solution.env.product.1.desc")}</Heading>
                            <P>{T("solution.env.product.1.desc")}</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read Blog  →</Link>
                        </Flex>
                    </Panel>
                    <Panel>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "3.5rem",
                            queries: {
                                768: {
                                    gap: "1.5rem"
                                }
                            }
                        }}>
                            <ImageWrapper>
                                <img src={Image} />
                            </ImageWrapper>
                            <Heading level={4}>{T("solution.env.product.2.desc")}</Heading>
                            <P>{T("solution.env.product.2.desc")}</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read Blog  →</Link>
                        </Flex>
                    </Panel>
                </Grid>
            </Subsection>
        </motion.div>
    )
}

export default EnvironmentSection;
