import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Panel from "../../../../components/custom/panel";
import Link from "../../../../components/basic/link";

const DevServicesSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>A Wide Range of Web Application</Badge>
                <Heading level={1}>Developement Services</Heading>
                <P>Light years ahead of our competitors, Inletsky offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.</P>
            </Flex>
            <Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Progressive Web Applications (PWAs)</Heading>
                            <P>Invest your hard-earned money in progressive web app development to provide accessible and user-friendly online experiences.</P>
                        </Flex>
                    </Panel>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Cloud-Based Web Applications</Heading>
                            <P>Hire our developers to leverage the competency of hosting web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</P>
                        </Flex>
                    </Panel>
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Enterprise Web Application</Heading>
                            <P>Build industry-standard enterprise web apps by using our customer-centric agile methodologies and keep your business competitive.</P>
                        </Flex>
                    </Panel>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Supply Chain Management Web Apps</Heading>
                            <P>Outsource web app development services to us and develop automated software to streamline the interconnected network of suppliers, manufacturers, warehouses, distributors and retailers.</P>
                        </Flex>
                    </Panel>
                </Flex>
                <Flex $style={{
                    fDirection: "column"
                }}>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Web Portals</Heading>
                            <P>Partner with Inletsky to leverage the competency to host web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</P>
                        </Flex>
                    </Panel>
                    <Panel>
                        <Flex>
                            <Flex></Flex>
                            <Heading level={4}>Web Application Consulting</Heading>
                            <P>Our team enjoys the challenge of working on uncharted prospects and helps with brainstorming, analysis, and finalizing the solution landscape for web application development.</P>
                        </Flex>
                    </Panel>
                </Flex>
            </Flex>
            <Link to="">hire dedicated developement team  →</Link>
        </Flex>
    )
}

export default DevServicesSection;
