import React from "react";
import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import ServiceItem from "../../../../components/page/service-item";

import Image1 from "../../../../assets//img/networking/1.png";
import Image2 from "../../../../assets//img/networking/2.png";
import Image3 from "../../../../assets//img/networking/3.png";
import Image4 from "../../../../assets//img/networking/4.png";
import Image5 from "../../../../assets//img/networking/5.png";

const NetworksSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                gap: "7rem"
            }}>
                <ServiceItem
                    img={Image1}
                    badge="Design without limits"
                    title="Design"
                    desc="Style your map with lines, polygons, labels, icons, patterns, extrusions, raster & terrain with hundreds of options and a powerful expression language, not only controlling all visual aspects through the zoom range but having the freedom to change them at any time dynamically."
                    link={{
                        label: "Learn more about design  →",
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image2}
                    badge="Design without limits"
                    title="Navigation"
                    desc="Inletsky provides powerful routing engines, accurate, traffic-powered travel times, and intuitive turn-by-turn directions to help you build engaging navigation experiences."
                    link={{
                        label: "more about navigate  →",
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image3}
                    badge="See what’s inside our studio"
                    title="Studio"
                    desc="Inletsky Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn."
                    link={{
                        label: "know more about design  →",
                        to: ""
                    }}
                    isReverse
                />
                <ServiceItem
                    img={Image4}
                    badge=" Experience our maps"
                    title="Maps"
                    desc="Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms."
                    link={{
                        label: "more about maps  →",
                        to: ""
                    }}
                />
                <ServiceItem
                    img={Image5}
                    badge="Tell us what to explore"
                    title="Search"
                    desc="Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world."
                    link={{
                        label: "discover search  →",
                        to: ""
                    }}
                    isReverse
                />
            </Flex>
        </Subsection>
    )
}

export default NetworksSection;
