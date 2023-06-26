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
import useStore from "../../../../useStore";

const ProjectScopeSection = () => {

    const { T } = useStore();

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
                        title={T("services.scope.details.1.title")}
                        desc={T("services.scope.details.1.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image2}
                        title={T("services.scope.details.2.title")}
                        desc={T("services.scope.details.2.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image3}
                        title={T("services.scope.details.3.title")}
                        desc={T("services.scope.details.3.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image4}
                        title={T("services.scope.details.4.title")}
                        desc={T("services.scope.details.4.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image5}
                        title={T("services.scope.details.5.title")}
                        desc={T("services.scope.details.5.desc")}
                    />
                </Flex>
                <Link to="" $style={{ color: GV("danger"), textTransform: "uppercase" }}>{T("services.scope.link")}</Link>
            </Flex>
        </Subsection>
    )
}

export default ProjectScopeSection
