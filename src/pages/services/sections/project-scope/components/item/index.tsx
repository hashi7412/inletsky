import React from "react";
import Flex from "../../../../../../components/basic/flex";
import { ImageWrapper, Separator } from "./style";
import Heading from "../../../../../../components/basic/heading";
import { P } from "../../../../../../components/basic/text";

type ItemPropsType = {
    image: any
    title: string
    desc: string
    isReverse?: boolean
}

const Item: React.FC<ItemPropsType> = ({
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
                <Separator />
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

export default Item;
