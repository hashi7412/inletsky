import React from "react";
import { PanelContainer, StyledPanelType } from "./style";

type PanelPropsType = {
    children: any
    $style?: StyledPanelType
}

const Panel: React.FC<PanelPropsType> = ({
    children,
    $style,
    ...rest
}) => {
    return (
        <PanelContainer {...$style}>
            {children}
        </PanelContainer>
    )
}

export default Panel;
