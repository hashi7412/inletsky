import React from "react";
import { FaqItemContainer, FaqItemThumb } from "./style";
import Heading from "../../basic/heading";
import Icon from "../../custom/icon";
import { P } from "../../basic/text";

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
