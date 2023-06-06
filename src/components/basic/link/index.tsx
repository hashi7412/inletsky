import React from "react";
import { StyledLink, StyledLinkPropsType } from "./style";
import { LinkProps } from 'react-router-dom';

type LinkPropsType = {
    children: any
    to: string
    $style?: StyledLinkPropsType
}

const Link: React.FC<LinkPropsType> = ({
    children,
    to,
    $style,
    ...rest
}) => {
    return (
        <StyledLink
            to={to}
            {...$style}
            {...rest}>
            {children}
        </StyledLink>
    )
}

export default Link;