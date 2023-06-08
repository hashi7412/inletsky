import React, { FC } from "react";
import { SpanWrapper, TextPropsType, TextWrapper } from "./style";

interface SpanPropsType {
    children?: any
    $style?: TextPropsType
    [key: string]: any
}

interface PPropsType {
    children?: any
    $style?: TextPropsType
    [key: string]: any
}

export const Span: FC<SpanPropsType> = ({ children, $style, ...rest }) => {
    return (
        <SpanWrapper
            {...$style}
            as={"span"}
            {...rest}
        >
            {children}
        </SpanWrapper>
    )
}

export const P: FC<PPropsType> = ({ children, $style, ...rest }) => {
    return (
        <TextWrapper
            as='p'
            {...$style}
            {...rest}
        >
            {children}
        </TextWrapper>
    )
}