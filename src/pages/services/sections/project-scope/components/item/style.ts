import styled from "styled-components";
import variables from "../../../../../../style/variable";
import { GV } from "../../../../../../utils/style.util";

export const ImageWrapper = styled.div`
    padding: 3.75rem;
    border-radius: 50%;
    background: ${GV('bg-sub')};

    img {
        display: flex;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const Separator = styled.span`
    display: inline-block;
    width: 3px;
    height: 3.25rem;
    align-self: center;
    background: ${GV('danger')};
`

export const ColSeparator = styled.span`
    display: inline-block;
    align-self: center;
    width: 3.25rem;
    height: 3px;
    background: ${GV('danger')};
`
