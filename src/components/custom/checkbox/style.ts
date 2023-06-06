import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const StyledCheckbox = styled.div<{isChecked: boolean}>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    ${({ isChecked }) => isChecked ? `background-color: ${GV("danger")};` : ``}
    border: 2px solid ${GV("danger")};
    border-radius: 8px;
    cursor: pointer;
`
