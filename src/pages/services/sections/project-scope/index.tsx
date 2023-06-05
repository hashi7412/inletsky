import React from "react";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";

const ProjectScopeSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Build A Success-Driven Development team to protect your</Badge>
                <Heading level={1}>Project Scope</Heading>
            </Flex>
            <Flex $style={{
                fDirection: "column"
            }}>
                <Flex>
                    <Flex></Flex>
                    <Flex>
                        <Heading level={4}>Designer</Heading>
                        <P>UI/UX Designers are responsible for the whole appearance and feel of a web application, including the User Interface (UI) and User Experience (UX) design. They impact design decisions since they are in charge of the entire product design, including color, typeface, navigation, and other elements.</P>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex></Flex>
                    <Flex>
                        <Heading level={4}>Backend Developer</Heading>
                        <P>Want a clear picture of database structure, data processing, and third-party integrations? Our backend web applications developers will manage everything for you in a timely manner. They actively ensure that data is exchanged securely and efficiently.</P>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex></Flex>
                    <Flex>
                        <Heading level={4}>Frontend Developers</Heading>
                        <P>The visual aspect of a web app is the face of your brand. Hire web app developers to determine how your users will view and interact. They bring the web app's layout to life by building scripts and collaborating with dynamic libraries and frameworks.</P>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex></Flex>
                    <Flex>
                        <Heading level={4}>Product Manager</Heading>
                        <P>Our domain-savvy product manager keeps the team focused and protects the project scope. They are in charge of the budget, planning, and ensuring that the team is filled with the greatest minds.</P>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex></Flex>
                    <Flex>
                        <Heading level={4}>Quality Assurance Engineer</Heading>
                        <P>Our Q/A testing does not occur at the conclusion of the development process. Instead, the process begins once the team has created a UI layout and continues till the launch stage. To guarantee that the design meets the criteria, our QA assurance engineer will use automated or manual testing methods.</P>
                    </Flex>
                </Flex>
            </Flex>
            <Link to="">discuss my web app development project  →</Link>
        </Flex>
    )
}

export default ProjectScopeSection
