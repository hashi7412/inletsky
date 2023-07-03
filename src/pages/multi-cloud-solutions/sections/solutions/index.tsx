import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import CrossListItem from "../../../../components/page/cross-list-item";
import { ColSeparator } from "../../../../components/page/cross-list-item/style";

import Image1 from "../../../../assets/illustration/services/1.svg";
import Image2 from "../../../../assets/illustration/services/2.svg";
import Image3 from "../../../../assets/illustration/services/3.svg";
import Image4 from "../../../../assets/illustration/services/4.svg";
import Image5 from "../../../../assets/illustration/services/5.svg";
import useStore from "../../../../useStore";

const SolutionSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                gap: "5rem"
            }}>
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "0.5rem" }}>
                    <Badge>Hybrid and Multi-Cloud environment</Badge>
                    <Heading level={1} $style={{ align: "center" }}>Business Cloud Solutions</Heading>
                </Flex>
                <Flex $style={{
                    fDirection: "column",
                    gap: "2.5rem"
                }}>
                    <CrossListItem
                        image={Image1}
                        title={T("solution.solution.detail1.title")}
                        desc={T("solution.solution.detail1.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image2}
                        title={T("solution.solution.detail2.title")}
                        desc={T("solution.solution.detail2.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image3}
                        title={T("solution.solution.detail3.title")}
                        desc={T("solution.solution.detail3.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image4}
                        title={T("solution.solution.detail4.title")}
                        desc={T("solution.solution.detail4.desc")}
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image5}
                        title={T("solution.solution.detail5.title")}
                        desc={T("solution.solution.detail5.desc")}
                    />
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default SolutionSection;
