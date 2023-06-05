import React from "react";
import { StyledLink } from "./style";
import { LinkProps } from 'react-router-dom';

type LinkPropsType = {
    children: any
    to: string
}

const Link: React.FC<LinkPropsType> = ({
    children,
    to,
    ...rest
}) => {
    return (
        <StyledLink to={to} {...rest}>
            {children}
        </StyledLink>
    )
}

export default Link;