import { FC } from "react";
import { FlexChildContainer, FlexContainer, FlexPropsType, StyledFlexChildPropsType } from "./style";

interface PropsType extends FlexPropsType {
    children?: any
    [key: string]: any
}

const Flex: FC<PropsType> = ({ children, ...rest }) => {
    return (
        <FlexContainer {...rest}>
            {children}
        </FlexContainer>
    )
}

interface FlexChildPropsType extends StyledFlexChildPropsType {
    children?: any
    [key: string]: any
}

export const FlexChild: FC<FlexChildPropsType> = ({ children, ...rest }) => {
    return (
        <FlexChildContainer {...rest}>
            {children}
        </FlexChildContainer>
    )
}

export default Flex;
