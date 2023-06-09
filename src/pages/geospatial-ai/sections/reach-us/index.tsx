import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";
import { Container } from "./style";

import { Flex, Heading, P } from "../../../../components/basic";
import { Badge, Button } from "../../../../components/custom";

const ReachUsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
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
        </motion.div>
    )
}

export default ReachUsSection;
