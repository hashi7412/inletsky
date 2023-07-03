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
                        title="Security by Default"
                        desc="At Inletsky, security is built into all our services and solutions by default. Our Managed IT Security Services experts will ensure you have complete control and confidence in the integrity of your data and the efficacy of your security systems, procedures, and protocols."
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image2}
                        title="Managed Multi Cloud"
                        desc="Inletsky Managed Multi-cloud service ensures you always get the best performing architecture for your applications and workloads. Understanding how and where your business is using its application and services allows us to align your cloud IT solutions with your business operations to risk, complexity, and cost."
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image3}
                        title="Virtual Data Centre"
                        desc="As an experienced Hybrid and Multi-Cloud solution provider, we’ll provision and de-provision resources in response to your changing needs. To ensure you get the ongoing support you need, our co-managed environment allows your IT teams to collaborate with our local Inletsky engineers as if Inletsky was an extension of your own data center. This is a fully flexible service based on your internal capabilities and capacity."
                    />
                    <ColSeparator />
                    <CrossListItem
                        isReverse
                        image={Image4}
                        title="Cloud Migration"
                        desc="Because you need to be able to respond to changing market conditions, as part of Inletsky Hybrid and Multi-cloud solutions, we also deliver Cloud Migration solutions to enable a speedy and efficient platform migration and modernization. Our Cloud Services team can migrate different types of platforms to keep them updated and operating at peak performance. This includes your Public Cloud migrations to AWS and Azure."
                    />
                    <ColSeparator />
                    <CrossListItem
                        image={Image5}
                        title="Security by Default"
                        desc="At Inletsky, security is built into all our services and solutions by default. Our Managed IT Security Services experts will ensure you have complete control and confidence in the integrity of your data and the efficacy of your security systems, procedures, and protocols."
                    />
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default SolutionSection;
