import React from "react";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0, rotateX: 90, perspective: 0.5 }}
            whileInView={{ opacity: 1, rotateX: 0, perspective: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 1 }}
        >
            <FaqItemContainer isActive={isActive || false}>
                <FaqItemThumb onClick={onClick}>
                    <Heading level={4}>{title}</Heading>
                    <Icon icon="Plus" />
                </FaqItemThumb>
                <P>{content}</P>
            </FaqItemContainer>
        </motion.div>
    )
}

export default FaqItem;
