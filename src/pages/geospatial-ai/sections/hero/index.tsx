import React from "react";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Badge from "../../../../components/custom/badge";
import ExplorerButton from "./explore";

import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import { StyledHeroContainer } from "./style";

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
                    <Badge>Instant automated detection,for anything.</Badge>
                    <Heading level={1} $style={{
                        align: "center",
                        mb: "1.5rem"
                    }}>Geospatial AI</Heading>
                    <Flex $style={{
                        vAlign: "center",
                        w: "65%"
                    }}>
                        <P $style={{
                            align: "center",
                            size: "20px",
                            mb: "3rem"
                        }}>he power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. Cost effectively.</P>
                    </Flex>

                </Flex>
                <ExplorerButton />
            </Subsection>
        </StyledHeroContainer>
    )
}

export default HeroSection;
