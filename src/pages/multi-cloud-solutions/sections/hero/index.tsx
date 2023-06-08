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
                    <Badge>Most cost-effective way possible through cloud IT solutions</Badge>
                    <Heading level={1} $style={{
                        align: "center",
                        mb: "1.5rem"
                    }}>Multi-Cloud Solutions</Heading>
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
                        }}>Having your data and applications located in the optimal cloud environment for your workloads not only delivers performance benefits, it also enables you to enjoy huge cost savings.</P>
                    </Flex>
                    <ExplorerButton />
                </Flex>
            </Subsection>
        </StyledHeroContainer>
    )
}

export default HeroSection;
