import React from "react";
import { GridContainer, StyledGridPropsType } from "./style";

type GridPropsType = {
    children?: any
    $style?: StyledGridPropsType
}

const Grid: React.FC<GridPropsType> = ({ children, $style }) => {
    return (
        <GridContainer {...$style}>
            {children}
        </GridContainer>
    )
}

export default Grid;
