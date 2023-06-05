import React from "react";
import { StyledButton, StyledButtonType } from "./style";

interface ButtonType extends StyledButtonType {
    children: any
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
}

const Button: React.FC<ButtonType> = ({
    children,
    ...rest
}) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default Button;
