import React from "react";
import Flex from "../../basic/flex";
import { ImageWrapper } from "./style";
import Seperator from "../seperator";
import Heading from "../../basic/heading";
import { P } from "../../basic/text";

type ItemPropsType = {
    image: any
    title: string
    desc: string
    isReverse?: boolean
}

const CrossListItem: React.FC<ItemPropsType> = ({
    image,
    title,
    desc,
    isReverse
}) => {
    return (
        <Flex
            $style={{
                hAlign: isReverse ? "flex-end" : "flex-start",
            }}
        >
            <Flex
                $style={{
                    fDirection: isReverse ? "row-reverse" : "row",
                    vAlign: "flex-start",
                    gap: "3.375rem",
                    w: "calc(100% - 15rem)",
                    queries: {
                        992: {
                            w: "100%"
                        }
                    }
                }}
            >
                <ImageWrapper><img src={image} /></ImageWrapper>
                <Seperator />
                <Flex $style={{ fDirection: "column", gap: "2.125rem" }}>
                    <Heading
                        level={4}
                        $style={{
                            align: isReverse ? "right" : "left"
                        }}
                    >{title}</Heading>
                    <P
                        $style={{
                            align: isReverse ? "right" : "left"
                        }}
                    >{desc}</P>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CrossListItem;
