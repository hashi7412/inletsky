import React from "react";
import { motion } from "framer-motion";
import { StyledHeroContainer } from "./style";

import { Heading, P, Flex } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";
import Subsection from "../../../../components/layout/subsection";
import ExplorerButton from "../../../../components/page/explorer";

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
                        <Badge>Instant automated detection,for anything.</Badge>
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
                        }}>Geospatial AI</Heading>
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
                            }}>he power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. Cost effectively.</P>
                        </motion.div>
                    </Flex>

                </Flex>
                <ExplorerButton />
            </Subsection>
        </StyledHeroContainer>
    )
}

export default HeroSection;
