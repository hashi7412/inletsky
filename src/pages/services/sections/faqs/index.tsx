import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Icon from "../../../../components/custom/icon";

const FaqsSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Question people often asks</Badge>
                <Heading level={1}>FAQs</Heading>
            </Flex>
            <Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>What is web application development?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>How much does it cost to develop a web application?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>Which programming languages are used for web applications?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>How long does it take to build a web app?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>Which is the best custom web app development company?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
                <Flex>
                    <Flex>
                        <Heading level={4}>In which areas does Inletsky provide its services?</Heading>
                        <P>A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.</P>
                    </Flex>
                    <Icon icon="Plus"/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FaqsSection;
