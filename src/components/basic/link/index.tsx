import React from "react";
import { StyledLink, StyledLinkPropsType } from "./style";

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