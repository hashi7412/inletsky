import React from "react";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Badge from "../../../../components/custom/badge";

import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import { StyledHeroContainer } from "./style";
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
                    <Badge>Explore what’s new with inletsky</Badge>
                    <Heading level={1} $style={{
                        align: "center",
                        mb: "1.5rem"
                    }}>BrainNet. GL JS</Heading>
                    <Flex $style={{
                        vAlign: "center",
                        w: "65%"
                    }}>
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
                        }}>BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web.</P>
                    </Flex>

                </Flex>
                <ExplorerButton />
            </Subsection>
        </StyledHeroContainer>
    )
}

export default HeroSection;
