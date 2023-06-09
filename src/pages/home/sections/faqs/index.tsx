import React, { useState } from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Subsection from "../../../../components/layout/subsection";
import FaqItem from "../../../../components/page/faq-item";

const FaqsSection = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const setActiveItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <Subsection>
            <Flex
                $style={{
                    fDirection: "column",
                    p: "0 7.5rem",
                    gap: "3.125rem",
                    queries: {
                        992: {
                            p: "0 2rem"
                        },
                        600: {
                            p: "0 1rem"
                        }
                    }
                }}
            >
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                    <Badge>Question people often asks</Badge>
                    <Heading level={1} $style={{ align: "center" }}>FAQs</Heading>
                </Flex>
                <Flex $style={{ fDirection: "column" }}>
                    <FaqItem
                        title="What is Inletsky GL JS?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(0)}
                        isActive={activeIndex === 0}
                    />
                    <FaqItem
                        title="What are the use cases for Inletsky GL JS?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(1)}
                        isActive={activeIndex === 1}
                    />
                    <FaqItem
                        title="What browsers are supported?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(2)}
                        isActive={activeIndex === 2}
                    />
                    <FaqItem
                        title="How do I get started using Inletsky GL JS?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(3)}
                        isActive={activeIndex === 3}
                    />
                    <FaqItem
                        title="What are the new features in Inletsky GL JS v2?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(4)}
                        isActive={activeIndex === 4}
                    />
                    <FaqItem
                        title="What are the performance improvements in Inletsky GL JS v2?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(5)}
                        isActive={activeIndex === 5}
                    />
                    <FaqItem
                        title="What can I do with 3D rendering in Inletsky GL JS v2?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(6)}
                        isActive={activeIndex === 6}
                    />
                    <FaqItem
                        title="What are the new features or improvements for 3D rendering?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(7)}
                        isActive={activeIndex === 7}
                    />
                    <FaqItem
                        title="What is the free form camera API?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(8)}
                        isActive={activeIndex === 8}
                    />
                    <FaqItem
                        title="What can I do with the free form camera?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(9)}
                        isActive={activeIndex === 9}
                    />
                    <FaqItem
                        title="Which map projections are supported?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(10)}
                        isActive={activeIndex === 10}
                    />
                    <FaqItem
                        title="What pricing is available with GL JS?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(11)}
                        isActive={activeIndex === 11}
                    />
                    <FaqItem
                        title="Do I pay by the number of map tiles loaded?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(12)}
                        isActive={activeIndex === 12}
                    />
                    <FaqItem
                        title="Offline Caching"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(13)}
                        isActive={activeIndex === 13}
                    />
                    <FaqItem
                        title="What are some upcoming features of Inletsky GL JS?"
                        content="With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android."
                        onClick={() => setActiveItem(14)}
                        isActive={activeIndex === 14}
                    />
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default FaqsSection;
