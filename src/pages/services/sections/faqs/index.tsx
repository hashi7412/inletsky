import React, { useState } from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Icon from "../../../../components/custom/icon";
import FaqItem from "./components/item";

const FaqsSection = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const setActiveItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <Flex $style={{ fDirection: "column", p: "0 7.5rem", gap: "3.125rem", mb: "7rem" }}>
            <Flex $style={{ fDirection: "column", vAlign: "center" }}>
                <Badge>Question people often asks</Badge>
                <Heading level={1} $style={{ align: "center" }}>FAQs</Heading>
            </Flex>
            <Flex $style={{ fDirection: "column" }}>
                <FaqItem
                    title="What is web application development?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(0)}
                    isActive={activeIndex === 0}
                />
                <FaqItem
                    title="How much does it cost to develop a web application?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(1)}
                    isActive={activeIndex === 1}
                />
                <FaqItem
                    title="Which programming languages are used for web applications?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(2)}
                    isActive={activeIndex === 2}
                />
                <FaqItem
                    title="How long does it take to build a web app?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(3)}
                    isActive={activeIndex === 3}
                />
                <FaqItem
                    title="Which is the best custom web app development company?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(4)}
                    isActive={activeIndex === 4}
                />
                <FaqItem
                    title="In which areas does Inletsky provide its services?"
                    content="A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it."
                    onClick={() => setActiveItem(5)}
                    isActive={activeIndex === 5}
                />
            </Flex>
        </Flex>
    )
}

export default FaqsSection;
