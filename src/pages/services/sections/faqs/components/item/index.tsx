import React from "react";
import Heading from "../../../../../../components/basic/heading";
import Icon from "../../../../../../components/custom/icon";
import Flex from "../../../../../../components/basic/flex";
import { P } from "../../../../../../components/basic/text";
import { FaqItemContainer, FaqItemThumb } from "./style";

interface FaqItemPropsType {
    title: string
    content: string
    onClick?: any
    isActive?: boolean
}

const FaqItem: React.FC<FaqItemPropsType> = ({
    title,
    content,
    onClick,
    isActive
}) => {
    return (
        <FaqItemContainer isActive={isActive || false}>
            <FaqItemThumb onClick={onClick}>
                <Heading level={4}>{title}</Heading>
                <Icon icon="Plus" />
            </FaqItemThumb>
            <P>{content}</P>
        </FaqItemContainer>
    )
}

export default FaqItem;
