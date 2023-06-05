import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Card from "../../../../components/custom/card";

const DeveServicesSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>A Wide Range of Web Application</Badge>
                <Heading level={1}>Developement Services</Heading>
                <P>Light years ahead of our competitors, Inletsky offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.</P>
            </Flex>
            <Flex>
                <Flex>
                    <Card>
                        <Flex>
                            <Flex></Flex>
                        </Flex>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
    )
}
