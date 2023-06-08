import styled from "styled-components";

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    overflow: hidden;
    border-radius: 3rem;

    @media (max-width: 1200px) {
        height: 300px;
    }

    @media (max-width: 922px) {
        height: 400px;
    }

    @media (max-width: 768px) {
        height: 300px;
    }

    @media (max-width: 600px) {
        height: 200px;
    }
`
