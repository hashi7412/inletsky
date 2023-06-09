import React from "react";
import { motion } from "framer-motion";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";
import Image1 from "../../../../assets/illustration/project-scope/1.svg";
import Image2 from "../../../../assets/illustration/project-scope/2.svg";
import Image3 from "../../../../assets/illustration/project-scope/3.svg";
import Image4 from "../../../../assets/illustration/project-scope/4.svg";
import Image5 from "../../../../assets/illustration/project-scope/5.svg";
import { GV } from "../../../../utils/style.util";
import Subsection from "../../../../components/layout/subsection";
import CrossListItem from "../../../../components/page/cross-list-item";
import { ColSeparator } from "../../../../components/page/cross-list-item/style";

const ProjectScopeSection = () => {
    return (
        <Subsection>
            <Flex
                $style={{
                    fDirection: "column",
                    vAlign: "center",
                    p: "0 9.25rem",
                    gap: "5rem",
                    queries: {
                        1200: {
                            p: '0 2rem',
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
                        <Badge>Build A Success-Driven Development team to protect your</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Heading level={1} $style={{ align: "center" }}>Project Scope</Heading>
                    </motion.div>
                </Flex>
                <Flex $style={{
                    fDirection: "column",
                    gap: "2.5rem"
                }}>
                    <CrossListItem
                        image={Image1}
                        title="Designer"
                        desc="UI/UX Designers are responsible for the whole appearance and feel of a web application, including the User Interface (UI) and User Experience (UX) design. They impact design decisions since they are in charge of the entire product design, including color, typeface, navigation, and other elements."
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image2}
                        title="Backend Developer"
                        desc="Want a clear picture of database structure, data processing, and third-party integrations? Our backend web applications developers will manage everything for you in a timely manner. They actively ensure that data is exchanged securely and efficiently."
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image3}
                        title="Frontend Developers"
                        desc="The visual aspect of a web app is the face of your brand. Hire web app developers to determine how your users will view and interact. They bring the web app's layout to life by building scripts and collaborating with dynamic libraries and frameworks."
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image4}
                        title="Product Manager"
                        desc="Our domain-savvy product manager keeps the team focused and protects the project scope. They are in charge of the budget, planning, and ensuring that the team is filled with the greatest minds."
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image5}
                        title="Quality Assurance Engineer"
                        desc="Our Q/A testing does not occur at the conclusion of the development process. Instead, the process begins once the team has created a UI layout and continues till the launch stage. To guarantee that the design meets the criteria, our QA assurance engineer will use automated or manual testing methods."
                    />
                </Flex>
                <Link to="" $style={{ color: GV("danger"), textTransform: "uppercase" }}>discuss my web app development project  →</Link>
            </Flex>
        </Subsection>
    )
}

export default ProjectScopeSection
