import styled from "styled-components"
import { GV } from "../../../utils/style.util"

export const ImageWrapper = styled.div`
    padding: 3.75rem;
    border-radius: 50%;
    background: ${GV('bg-sub')};

    img {
        display: flex;
        max-width: 55px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const ColSeparator = styled.span`
    display: inline-block;
    align-self: center;
    width: 3.25rem;
    height: 3px;
    background: ${GV('danger')};
`
