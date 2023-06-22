import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import ServiceItem from "../../../../components/page/service-item";

import Image1 from "../../../../assets//img/service/1.png";
import Image2 from "../../../../assets//img/service/2.png";
import Image3 from "../../../../assets//img/service/3.png";
import useStore from "../../../../useStore";

const ServicesSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                gap: "7rem"
            }}>
                <ServiceItem
                    img={Image1}
                    badge={T("home.services.vision.badge")}
                    title={T("home.services.vision.title")}
                    desc={T("home.services.vision.desc")}
                    link={{
                        label: T("home.services.vision.link"),
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image2}
                    badge={T("home.services.data.badge")}
                    title={T("home.services.data.title")}
                    desc={T("home.services.data.desc")}
                    link={{
                        label: T("home.services.data.link"),
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image3}
                    badge={T("home.services.atlas.badge")}
                    title={T("home.services.atlas.title")}
                    desc={T("home.services.atlas.desc")}
                    link={{
                        label: T("home.services.atlas.link"),
                        to: ""
                    }}
                />
            </Flex>
        </Subsection>
    )
}

export default ServicesSection;
