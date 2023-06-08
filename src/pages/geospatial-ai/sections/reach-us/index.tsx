import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Button from "../../../../components/custom/button";
import { Container } from "./style";
import { GV } from "../../../../utils/style.util";

const ReachUsSection = () => {
    return (
        <Container>
            <Flex
                $style={{
                    fDirection: "column",
                    vAlign: "center"
                }}
            >
                <Flex
                    $style={{
                        fDirection: "column",
                        vAlign: "center",
                        maxW: "700px",
                        gap: "2rem",
                        queries: {
                            768: {
                                gap: "1rem"
                            }
                        }
                    }}
                >
                    <Badge>accelerate your speed-to-insight</Badge>
                    <Heading level={1} $style={{
                        align: "center"
                    }}>Reach Us</Heading>
                    <P $style={{
                        align: "center",
                        size: "20px",
                        queries: {
                            768: {
                                size: "10px"
                            }
                        }
                    }}>What if you could develop and train AI models in minutes without labeled data? Let us help you transcend data limitations and unleash the value of AI in your business today.</P>
                    <Button $style={{
                        bg: GV("danger")
                    }}>Let’s Talk →</Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default ReachUsSection;
