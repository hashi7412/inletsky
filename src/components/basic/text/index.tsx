import React, { FC } from "react";
import { SpanWrapper, TextPropsType, TextWrapper } from "./style";

interface SpanPropsType extends TextPropsType {
    children?: any
    [key: string]: any
}

interface PPropsType extends TextPropsType {
    children?: any
    [key: string]: any
}

export const Span: FC<SpanPropsType> = ({ children, ...rest }) => {
    return (
        <SpanWrapper
            {...rest}
        >
            {children}
        </SpanWrapper>
    )
}

export const P: FC<PPropsType> = ({ children, ...rest }) => {
    return (
        <TextWrapper as='p' {...rest}>
            {children}
        </TextWrapper>
    )
}