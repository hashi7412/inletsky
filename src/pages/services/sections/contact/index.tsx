import React, { useState } from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import { Flex, Heading, P } from "../../../../components/basic";
import { Badge, Panel, Input, Textarea, Button, Checkbox } from "../../../../components/custom";
import Subsection from "../../../../components/layout/subsection";

const ContactSection = () => {

    const [isAgreed, setIsAgreed] = useState<boolean>(false);
    return (
        <Subsection>
            <Flex
                $style={{
                    fDirection: "column",
                    p: "0 3.125rem",
                    gap: "3.25rem",
                    queries: {
                        992: {
                            p: "0 1rem"
                        }
                    }
                }}
            >
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "0.5rem" }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Badge>Let Us Know What You’re Looking for</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Heading level={1} $style={{ align: "center" }}>We’ll Build it for You</Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <P $style={{ align: "center" }}>We are passionate about delivering great software and services.</P>
                    </motion.div>
                </Flex>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    viewport={{ once: true }}
                >
                    <Panel>
                        <Flex $style={{ fDirection: "column", gap: "1rem" }}>
                            <Flex $style={{ fDirection: "column", gap: "1.875rem", queries: { 768: { gap: "1rem" } } }}>
                                <Flex
                                    $style={{
                                        gap: "6.25rem",
                                        queries: {
                                            992: {
                                                gap: "2rem"
                                            },
                                            768: {
                                                fDirection: "column",
                                                gap: "1rem"
                                            }
                                        }
                                    }}
                                >
                                    <Input value="" onChange={() => { }} placeholder="Name*" />
                                    <Input value="" onChange={() => { }} placeholder="Email*" />
                                </Flex>
                                <Input value="" onChange={() => { }} placeholder="What are you seeking for?" />
                                <Input value="" onChange={() => { }} placeholder="How did you hear about Inletsky?" />
                                <Textarea value="" onChange={() => { }} placeholder="Message" />
                                <Checkbox
                                    label={"I agree to the Terms & Conditions*"}
                                    isChecked={isAgreed}
                                    onChange={() => setIsAgreed((prev) => !prev)}
                                />
                            </Flex>
                            <Flex $style={{ hAlign: "center" }}>
                                <Button $style={{ bg: GV("danger") }}>Send message →</Button>
                            </Flex>
                        </Flex>
                    </Panel>
                </motion.div>
            </Flex>
        </Subsection>
    )
}

export default ContactSection;
