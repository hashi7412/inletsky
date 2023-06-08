import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import { Input } from "../../../../components/custom/input";
import Button from "../../../../components/custom/button";
import { GV } from "../../../../utils/style.util";

const DeliveringSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                gap: "2rem",
                queries: {
                    768: {
                        fDirection: "column",
                        vAlign: "center",
                        gap: "3rem"
                    }
                }
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    gap: "2rem",
                    p: "5rem 0 0",
                    queries: {
                        768: {
                            vAlign: "center"
                        }
                    }
                }}>
                    <Badge>Delivering optimal architecture and performance</Badge>
                    <Heading level={1} $style={{
                        queries: {
                            768: {
                                align: "center"
                            }
                        }
                    }}>Cost-effective way possible through cloud IT solutions.</Heading>
                    <P $style={{
                        size: "20px",
                        queries: {
                            768: {
                                size: "14px",
                                align: "center",
                            },
                            600: {
                                size: "10px"
                            }
                        }
                    }}>Designed, implemented, and managed to deliver the highest performing and most secure business cloud solutions, Inletsky Multi-Cloud and Hybrid Cloud Solutions deliver the right application for your modern, dynamic, and flexible working environment.</P>
                    <P $style={{
                        size: "20px",
                        queries: {
                            768: {
                                size: "14px",
                                align: "center",
                            },
                            600: {
                                size: "10px"
                            }
                        }
                    }}>And because Inletsky fully managed Hybrid and Multi-Cloud environments can be reconfigured at the flick of a switch to respond to the changing rhythm of your business, you enjoy complete freedom, flexibility, and control in the cloud.</P>
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Panel>
                        <Flex $style={{
                            fDirection: "column",
                            gap: "2rem",
                            p: "5rem 0"
                        }}>
                            <Heading level={3}>Free Download: Cloud Best Practice Top Ten Checklist</Heading>
                            <P>The top-ten priorities for selecting the right cloud services for your business. Our step-by-step checklist puts you in the know.</P>
                            <Input placeholder="Name*" value="" />
                            <Input placeholder="Email*" value="" />
                            <Button $style={{
                                bg: GV("danger")
                            }}>Submit →</Button>
                        </Flex>
                    </Panel>
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default DeliveringSection;
