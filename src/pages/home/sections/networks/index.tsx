import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import ServiceItem from "../../../../components/page/service-item";

import Image1 from "../../../../assets//img/networking/1.png";
import Image2 from "../../../../assets//img/networking/2.png";
import Image3 from "../../../../assets//img/networking/3.png";
import Image4 from "../../../../assets//img/networking/4.png";
import Image5 from "../../../../assets//img/networking/5.png";
import useStore from "../../../../useStore";

const NetworksSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                gap: "7rem"
            }}>
                <ServiceItem
                    img={Image1}
                    badge={T("home.networks.design.badge")}
                    title={T("home.networks.design.title")}
                    desc={T("home.networks.design.desc")}
                    link={{
                        label: T("home.networks.design.link"),
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image2}
                    badge={T("home.networks.navigation.badge")}
                    title={T("home.networks.navigation.title")}
                    desc={T("home.networks.navigation.desc")}
                    link={{
                        label: T("home.networks.navigation.link"),
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image3}
                    badge={T("home.networks.navigation.badge")}
                    title={T("home.networks.navigation.title")}
                    desc={T("home.networks.navigation.desc")}
                    link={{
                        label: T("home.networks.navigation.link"),
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image4}
                    badge={T("home.networks.maps.badge")}
                    title={T("home.networks.maps.title")}
                    desc={T("home.networks.maps.desc")}
                    link={{
                        label: T("home.networks.navigation.link"),
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image5}
                    badge={T("home.networks.maps.badge")}
                    title={T("home.networks.maps.title")}
                    desc={T("home.networks.maps.desc")}
                    link={{
                        label: T("home.networks.maps.link"),
                        to: ""
                    }}
                    isReverse
                />
            </Flex>
        </Subsection>
    )
}

export default NetworksSection;
