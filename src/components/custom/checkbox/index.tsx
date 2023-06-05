import React from "react";
import { CheckboxContainer, StyledCheckbox } from "./style";

type CheckboxPropsType = {
    label?: string
}

const Checkbox: React.FC<CheckboxPropsType> = ({
    label
}) => {
    return (
        <CheckboxContainer>
            <StyledCheckbox type="checkbox" />
            {label && label}
        </CheckboxContainer>
    )
}

export default Checkbox;
