import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Grid from "../../../../components/basic/grid";
import Panel from "../../../../components/custom/panel";
import Image from "../../../../assets/img/data-kind/2.png";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import { ImageWrapper } from "./style";

const EnvironmentSection = () => {
    return (
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
                        <Heading level={4}>Selecting the Right Cloud for Your Business.</Heading>
                        <P>There are a myriad of cloud options and service levels available today – the challenge is to ensure that service capabilities align with your business requirements and help your business accelerate growth and unlock innovation.</P>
                        <Link to="">Read Blog  →</Link>
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
                        <Heading level={4}>Selecting the Right Cloud for Your Business.</Heading>
                        <P>There are a myriad of cloud options and service levels available today – the challenge is to ensure that service capabilities align with your business requirements and help your business accelerate growth and unlock innovation.</P>
                        <Link to="">Read Blog  →</Link>
                    </Flex>
                </Panel>
            </Grid>
        </Subsection>
    )
}

export default EnvironmentSection;
