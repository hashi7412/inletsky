import React, { FC } from "react";
import { HeadingContainer, HeadingPropsType } from "./style";

interface PropsType {
    children?: any
    level: HeadingLevelType
    $style?: Partial<HeadingPropsType>
    [key: string]: any
}

const Heading: FC<PropsType> = ({ children, level, $style, ...rest }) => {
    return (
        <HeadingContainer
            as={`h${level}`}
            level={level}
            {...$style}
            {...rest}
        >
            {children}
        </HeadingContainer>
    )
}

export default Heading
