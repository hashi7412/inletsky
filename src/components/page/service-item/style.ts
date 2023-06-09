import styled from "styled-components";

export const ImageWrapper = styled.div`
    flex: 1 1 50%;
    width: 50%;

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        flex: auto;
        width: auto;
    }
`