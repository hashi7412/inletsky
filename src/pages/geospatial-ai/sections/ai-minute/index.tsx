import React from "react";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Link from "../../../../components/basic/link";

import Image from "../../../../assets/img/ai-in-minutes-not-months.png"
import Badge from "../../../../components/custom/badge";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";

const AiMinuteSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "4rem"
            }}>
                <Flex $style={{
                    gap: "2rem"
                }}>
                    <Flex $style={{
                        fDirection: "column",
                        vAlign: "flex-start",
                        gap: "2rem"
                    }}>
                        <Badge>say goodbye to labeling</Badge>
                        <Heading level={1}>AI in Minutes, Not Months.</Heading>
                        <P $style={{
                            size: "20px"
                        }}>You don’t really want AI, you want answers. Getting them today takes months - or years - and costs millions of dollars. What if you could get around the problem of needing massive amounts of human-labeled data? What if you could use AI to get critical insights - even when data is unstructured or sparse? Instead of needing months of human labeling to have some base AI performance in a new situation, RAIC can get to work immediately, radically reducing the latency between data collection and actionable insights.</P>
                    </Flex >
                    <img src={Image} />
                </Flex>
                <Link to="" $style={{
                    color: GV("danger"),
                    textTransform: "uppercase"
                }}>Learn More  →</Link>
            </Flex>
        </Subsection>
    )
}

export default AiMinuteSection;
