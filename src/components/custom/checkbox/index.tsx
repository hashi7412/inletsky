import React from "react";
import { CheckboxContainer, StyledCheckbox } from "./style";
import Icon from "../icon";

type CheckboxPropsType = {
    label?: string
    isChecked?: boolean
    onChange?: any
}

const Checkbox: React.FC<CheckboxPropsType> = ({
    label,
    isChecked,
    onChange
}) => {
    return (
        <CheckboxContainer onClick={onChange}>
            <StyledCheckbox isChecked={isChecked ?? false}>
                {isChecked && <Icon icon="Check" />}
            </StyledCheckbox>
            {label && label}
        </CheckboxContainer>
    )
}

export default Checkbox;
