import React, { useState } from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import Checkbox from "../../../../components/custom/checkbox";
import Button from "../../../../components/custom/button";
import { GV } from "../../../../utils/style.util";
import { Input, Textarea } from "../../../../components/custom/input";
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
                    <Badge>Let Us Know What You’re Looking for</Badge>
                    <Heading level={1} $style={{ align: "center" }}>We’ll Build it for You</Heading>
                    <P $style={{ align: "center" }}>We are passionate about delivering great software and services.</P>
                </Flex>
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
            </Flex>
        </Subsection>
    )
}

export default ContactSection;
