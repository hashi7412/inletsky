import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import ServiceItem from "../../../../components/page/service-item";

import Image1 from "../../../../assets//img/service/1.png";
import Image2 from "../../../../assets//img/service/2.png";
import Image3 from "../../../../assets//img/service/3.png";

const ServicesSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                gap: "7rem"
            }}>
                <ServiceItem
                    img={Image1}
                    badge="The vision behind Inletsky"
                    title="Vision"
                    desc="The Inletsky Vision SDK describes every curb, lane, street sign, and road hazard it sees as data. Developers use the SDK's AI-powered semantic segmentation, object detection, and classification to deliver precise navigation guidance, display driver assistance alerts, and detect and map road incidents."
                    link={{
                        label: "Discover Vision  →",
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image2}
                    badge="Your data is our responsibility"
                    title="Data"
                    desc="Our data is powered by hundreds of data sources, and a distributed global users base of more than half a billion monthly active users."
                    link={{
                        label: "more about data  →",
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image3}
                    badge="Our Newest Product"
                    title="Atlas"
                    desc="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                    link={{
                        label: "Try atlas  →",
                        to: ""
                    }}
                />
            </Flex>
        </Subsection>
    )
}

export default ServicesSection;
