import React from "react";
import { motion } from "framer-motion";
import { StyledHeroContainer } from "./style";

import ExplorerButton from "../../../../components/page/explorer";
import Subsection from "../../../../components/layout/subsection";
import { Flex, Heading, P } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";


const HeroSection = () => {
    return (
        <StyledHeroContainer>
            <Subsection $style={{
                mb: "0 auto"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "1rem",
                    mb: "10rem",
                    queries: {
                        768: {
                            mb: "0"
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <Badge>Most cost-effective way possible through cloud IT solutions</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <Heading level={1} $style={{
                            align: "center",
                            mb: "1.5rem"
                        }}>Multi-Cloud Solutions</Heading>
                    </motion.div>
                    <Flex $style={{
                        vAlign: "center",
                        w: "65%"
                    }}>
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <P $style={{
                                align: "center",
                                size: "20px",
                                mb: "3rem",
                                queries: {
                                    768: {
                                        size: "14px"
                                    },
                                    600: {
                                        size: "10px"
                                    }
                                }
                            }}>Having your data and applications located in the optimal cloud environment for your workloads not only delivers performance benefits, it also enables you to enjoy huge cost savings.</P>
                        </motion.div>
                    </Flex>
                    <ExplorerButton />
                </Flex>
            </Subsection>
        </StyledHeroContainer>
    )
}

export default HeroSection;
