import styled from "styled-components";
import variables from "../../../../../../style/variable";

export const ImageWrapper = styled.div`
    padding: 3.75rem;
    border-radius: 50%;
    background: ${variables["--bg-sub"]};

    img {
        display: flex;
    }
`

export const Separator = styled.span`
    display: inline-block;
    width: 3px;
    height: 3.25rem;
    align-self: center;
    background: ${variables['--danger']};
`

export const ColSeparator = styled.span`
    display: inline-block;
    align-self: center;
    width: 3.25rem;
    height: 3px;
    background: ${variables['--danger']};
`
