import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import List, { ListItem } from "../../../../components/basic/list";
import Link from "../../../../components/basic/link";
import { ImageWrapper } from "./style";
import HeroSvg from '../../../../assets/illustration/hero.svg';
import { GV } from "../../../../utils/style.util";
import Subsection from "../../../../components/layout/subsection";
import HeroContainer from "../../../../components/layout/hero";

const HeroSection = () => {
    return (
        <HeroContainer>
            <Subsection>
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
                    <Badge>Explore what’s new with inletsky</Badge>
                    <Flex $style={{
                        vAlign: "center"
                    }}>
                        <Flex
                            $style={{
                                fDirection: "column",
                                gap: "1.5rem",
                                queries: {
                                    992: {
                                        vAlign: "center"
                                    }
                                }
                            }}
                        >
                            <Heading level={1} $style={{
                                queries: {
                                    992: {
                                        align: "center"
                                    }
                                }
                            }}>Innovative Web Solutions</Heading>
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
                            <List dir="column">
                                <ListItem
                                    $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "1rem"
                                            }
                                        }
                                    }}>Latest web technologies like Elixir, ReactJS, Laravel, Node.js</ListItem>
                                <ListItem
                                    $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "1rem"
                                            }
                                        }
                                    }}>Wallet-friendly engagement models to hire developers</ListItem>
                                <ListItem
                                    $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "1rem"
                                            }
                                        }
                                    }}>Daily collaborative meetings with product managers</ListItem>
                                <ListItem
                                    $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "1rem"
                                            }
                                        }
                                    }}>Free full-cycle quality assurance</ListItem>
                            </List>
                            <Link to="" $style={{ color: GV("danger"), textTransform: "uppercase" }}>want a free consultation  →</Link>
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