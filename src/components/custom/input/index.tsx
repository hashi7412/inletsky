import React from "react";
import { InputBoard, InputContainer, InputContent, InputLabel, InputWrapper, StyledInput } from "./style";

type InputPropsType = {
    label?: string | React.ReactNode
    value: string
    onChange?: any
    placeholder?: string
    helpSide?: any
}

const Input: React.FC<InputPropsType> = ({
    label,
    helpSide,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper>
                    <StyledInput {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard />
            </InputContent>
        </InputContainer>
    )
}

export default Input;
