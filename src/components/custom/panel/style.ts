import styled from "styled-components";
import variables from "../../../style/variable";

export type StyledPanelType = {
    p?: string
}

export const PanelContainer = styled.div<StyledPanelType>`
        background: ${variables['--bg-sub']};
        border-radius: 1.5rem;
        ${({ p }) => `padding: ${p ?? '2.5rem 3rem'};`}
`
