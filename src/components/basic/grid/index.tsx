import { FC } from "react";
import { GridChildContainer, GridContainer, GridPropsType, StyledGridChildPropsType } from "./style";

interface PropsType extends GridPropsType {
    children?: any
    [key: string]: any
}

const Grid: FC<PropsType> = ({ children, ...rest }) => {
    return (
        <GridContainer {...rest}>
            {children}
        </GridContainer>
    )
}

interface GridChildPropsType extends StyledGridChildPropsType {
    children?: any
    [key: string]: any
}

export const GridChild: FC<GridChildPropsType> = ({ children, ...rest }) => {
    return (
        <GridChildContainer {...rest}>
            {children}
        </GridChildContainer>
    )
}

export default Grid;
