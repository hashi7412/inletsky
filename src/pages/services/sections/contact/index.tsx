import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import Input from "../../../../components/custom/input";
import Checkbox from "../../../../components/custom/checkbox";
import Button from "../../../../components/custom/button";
import variables from "../../../../style/variable";
import { GV } from "../../../../utils/style.util";

const ContactSection = () => {
    return (
        <Flex $style={{ fDirection: "column", p: "0 3.125rem", gap: "3.25rem", mb: "7rem" }}>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "0.5rem" }}>
                <Badge>Let Us Know What You’re Looking for</Badge>
                <Heading level={1} $style={{ align: "center" }}>We’ll Build it for You</Heading>
                <P $style={{ align: "center" }}>We are passionate about delivering great software and services.</P>
            </Flex>
            <Panel>
                <Flex $style={{ fDirection: "column" }}>
                    <Flex $style={{ fDirection: "column", gap: "1.875rem" }}>
                        <Flex $style={{ gap: "6.25rem" }}>
                            <Input value="" onChange={() => { }} placeholder="Name*" />
                            <Input value="" onChange={() => { }} placeholder="Email*" />
                        </Flex>
                        <Input value="" onChange={() => { }} placeholder="What are you seeking for?" />
                        <Input value="" onChange={() => { }} placeholder="How did you hear about Inletsky?" />
                        <Input value="" onChange={() => { }} placeholder="Message" />
                        <Checkbox
                            label={"I agree to the Terms & Conditions*"}
                        />
                    </Flex>
                    <Flex $style={{ hAlign: "center" }}>
                        <Button $style={{ bg: GV("danger") }}>Send message →</Button>
                    </Flex>
                </Flex>
            </Panel>
        </Flex>
    )
}

export default ContactSection;
