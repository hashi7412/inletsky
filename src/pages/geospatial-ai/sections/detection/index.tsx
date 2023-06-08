import React from "react";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import DetectImg from "../../../../assets/illustration/detect/detect.svg";
import Detect1Img from "../../../../assets/illustration/detect/detect1.svg";
import Detect2Img from "../../../../assets/illustration/detect/detect2.svg";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Subsection from "../../../../components/layout/subsection";

const DetectionSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                hAlign: "space-between",
                gap: "1rem",
                queries: {
                    768: {
                        fDirection: "column",
                        vAlign: "c"
                    }
                }
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "flex-start",
                    gap: "2rem",
                    w: "55%"
                }}>
                    <Badge>order from disorder</Badge>
                    <Heading level={1}>Detection in minutes, without labeled data.</Heading>
                    <img src={Detect1Img} />
                    <P $style={{
                        size: "20px"
                    }}>Inletsky’s LiDAR (Light Detection and Ranging) automates the analysis of large, unstructured datasets so you can train and deploy AI models radically faster than traditional approaches.</P>
                    <img src={Detect2Img} />
                    <P $style={{
                        size: "20px"
                    }}>With LiDAR, non-technical teams can build and run classification and detection models in minutes without labeled data</P>
                </Flex>
                <Flex>
                    <img src={DetectImg} alt="" />
                </Flex>
            </Flex>
        </Subsection>
    )
}

export default DetectionSection;
