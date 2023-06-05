import React from "react";
import { BadgeContainer } from "./style";

type BadgePropsType = {
    children: any
}

const Badge: React.FC<BadgePropsType> = ({
    children
}) => {
    return (
        <BadgeContainer>
            { children }
        </BadgeContainer>
    )
}

export default Badge;