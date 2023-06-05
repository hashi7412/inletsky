import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import Input from "../../../../components/custom/input";
import Checkbox from "../../../../components/custom/checkbox";
import Button from "../../../../components/custom/button";

const ContactSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Let Us Know What You’re Looking for</Badge>
                <Heading level={1}>We’ll Build it for You</Heading>
                <P>We are passionate about delivering great software and services.</P>
            </Flex>
            <Panel>
                <Flex>
                    <Flex>
                        <Flex>
                            <Input value="" placeholder="Name*" />
                            <Input value="" placeholder="Email*" />
                        </Flex>
                        <Input value="" placeholder="What are you seeking for?" />
                        <Input value="" placeholder="How did you hear about Inletsky?" />
                        <Input value="" placeholder="Message" />
                        <Checkbox
                            label={"I agree to the Terms & Conditions*"}
                        />
                    </Flex>
                    <Button>Send message →</Button>
                </Flex>
            </Panel>
        </Flex>
    )
}

export default ContactSection;
