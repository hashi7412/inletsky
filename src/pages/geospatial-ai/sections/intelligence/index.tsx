import React from "react";
import Flex from "../../../../components/basic/flex";
import Image from "../../../../assets/img/new-standard-of-intelligence.png";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import { Container, ImageWrapper } from "./style";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";

const IntelligenceSection = () => {
    return (
        <Container>
            <Subsection mb="0px">
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "2rem"
                }}>
                    <Flex $style={{
                        gap: "1rem",
                        queries: {
                            768: {
                                fDirection: "column-reverse",
                                gap: "2rem"
                            }
                        }
                    }}>
                        <ImageWrapper>
                            <img src={Image} />
                        </ImageWrapper>
                        <Flex $style={{
                            fDirection: "column",
                            vAlign: "flex-end",
                            gap: "2rem",
                            p: "5rem 0 0"
                        }}>
                            <Badge>say goodbye to labeling</Badge>
                            <Heading level={1} $style={{
                                align: "right",
                                queries: {
                                    768: {
                                        align: "center"
                                    }
                                }
                            }}>The new standard of Intelligence.</Heading>
                            <P $style={{
                                align: "right",
                                size: "20px",
                                queries: {
                                    768: {
                                        align: "center",
                                        size: "10px"
                                    }
                                }
                            }}>The days of labeling data by hand over weeks, months, or even years are gone. LiDAR is an end-to-end AI pipeline that automates the analysis of a variety of large, unstructured datasets, from security camera footage to geospatial imagery. You can ingest, search, and categorize your data - build and train models - run inference - and integrate or access LiDAR through cloud-hosted APIs. Integrate LiDAR into your current workflows today to exponentially accelerate your speed-to-insight.</P>
                        </Flex>
                    </Flex>
                    <Link to="" $style={{
                        color: GV("danger"),
                        textTransform: "uppercase"
                    }}>See More Examples  →</Link>
                </Flex>
            </Subsection>
        </Container>
    )
}

export default IntelligenceSection;
