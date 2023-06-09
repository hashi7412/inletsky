import React from "react";
import { motion } from "framer-motion";
import { ImageWrapper } from "./style";
import { GV } from "../../../../utils/style.util";

import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import List, { ListItem } from "../../../../components/basic/list";
import Link from "../../../../components/basic/link";
import HeroSvg from '../../../../assets/illustration/hero.svg';
import Subsection from "../../../../components/layout/subsection";
import HeroContainer from "../../../../components/layout/hero";

const HeroSection = () => {
    return (
        <HeroContainer>
            <Subsection $style={{
                mb: "0"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    hAlign: "center",
                    gap: "2rem",
                    p: "3rem 2rem 0",
                    queries: {
                        768: {
                            gap: "1rem",
                            p: "10rem 1rem 0"
                        }
                    }
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Badge>Explore what’s new with inletsky</Badge>
                    </motion.div>
                    <Flex $style={{
                        vAlign: "center"
                    }}>
                        <Flex
                            $style={{
                                flex: "5",
                                fDirection: "column",
                                gap: "1.5rem",
                                queries: {
                                    992: {
                                        vAlign: "center"
                                    }
                                }
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, translateY: 50 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Heading level={1} $style={{
                                    queries: {
                                        992: {
                                            align: "center"
                                        }
                                    }
                                }}>Innovative Web Solutions</Heading>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <P
                                    $style={{
                                        size: "1.25rem",
                                        queries: {
                                            768: {
                                                size: "1rem"
                                            }
                                        }
                                    }}
                                >We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. </P>
                            </motion.div>
                            <List dir="column">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <ListItem
                                        $style={{
                                            size: "20px",
                                            color: GV("color-secondary"),
                                            queries: {
                                                768: {
                                                    size: "1rem"
                                                }
                                            }
                                        }}>Latest web technologies like Elixir, ReactJS, Laravel, Node.js</ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.3 }}
                                    viewport={{ once: true }}
                                >
                                    <ListItem
                                        $style={{
                                            size: "20px",
                                            color: GV("color-secondary"),
                                            queries: {
                                                768: {
                                                    size: "1rem"
                                                }
                                            }
                                        }}>Wallet-friendly engagement models to hire developers</ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.6 }}
                                    viewport={{ once: true }}
                                >
                                    <ListItem
                                        $style={{
                                            size: "20px",
                                            color: GV("color-secondary"),
                                            queries: {
                                                768: {
                                                    size: "1rem"
                                                }
                                            }
                                        }}>Daily collaborative meetings with product managers</ListItem>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.9 }}
                                    viewport={{ once: true }}
                                >
                                    <ListItem
                                        $style={{
                                            size: "20px",
                                            color: GV("color-secondary"),
                                            queries: {
                                                768: {
                                                    size: "1rem"
                                                }
                                            }
                                        }}>Free full-cycle quality assurance</ListItem>
                                </motion.div>
                            </List>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2 }}
                                viewport={{ once: true }}
                            >
                                <Link to="" $style={{ color: GV("danger"), textTransform: "uppercase" }}>want a free consultation  →</Link>
                            </motion.div>
                        </Flex>
                        <ImageWrapper>
                            <img src={HeroSvg} />
                        </ImageWrapper>
                    </Flex>
                </Flex>
            </Subsection>
        </HeroContainer>
    )
}

export default HeroSection;