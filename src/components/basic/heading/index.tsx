import React, { FC } from "react";
import { HeadingContainer, HeadingPropsType } from "./style";

interface PropsType extends HeadingPropsType {
    children?: any
    level: 1 | 2 | 3 | 4 | 5 | 6
    [key: string]: any
}

const Heading: FC<PropsType> = ({ children, level, ...rest }) => {
    return (
        <HeadingContainer
            as={`h${level}`}
            level={level}
            {...rest}
        >
            {children}
        </HeadingContainer>
    )
}

export default Heading
