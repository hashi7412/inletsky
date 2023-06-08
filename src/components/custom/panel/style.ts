import styled from "styled-components";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";

export type StyledPanelType = {
    p?: string
}

export const PanelContainer = styled.div<StyledPanelType>`
    background: ${GV('bg-sub')};
    border-radius: 1.5rem;
    ${({ p }) => `padding: ${p ?? '2.5rem 3rem'};`}
    backdrop-filter: blur(20px);

    @media (max-width: 768px) {
        ${({ p }) => `padding: ${p ?? '1.5rem 1rem'};`}
    }
`
