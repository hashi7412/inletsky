import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import List, { ListItem } from "../../../../components/basic/list";
import Link from "../../../../components/basic/link";
import { HeroContainer, ImageWrapper } from "./style";
import HeroSvg from '../../../../assets/illustration/hero.svg';

const HeroSection = () => {
    return (
        <HeroContainer>
            <Badge>Explore what’s new with inletsky</Badge>
            <Flex $style={{ vAlign: "center" }}>
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
                    <Link to="">want a free consultation  →</Link>
                </Flex>
                <ImageWrapper>
                    <img src={HeroSvg} />
                </ImageWrapper>
            </Flex>
        </HeroContainer>
    )
}

export default HeroSection;