import { FC } from "react";
import { GridChildContainer, GridContainer, GridPropsType, StyledGridChildPropsType } from "./style";

interface PropsType {
    children?: any
    $style?: GridPropsType
    [key: string]: any
}

const Grid: FC<PropsType> = ({ children, $style, ...rest }) => {
    return (
        <GridContainer 
            {...$style}
            {...rest}
        >
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
