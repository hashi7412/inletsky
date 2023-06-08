import styled from "styled-components";
import PatterBg from "../../../../assets/illustration/pattern-bg.svg";

export const Container = styled.div`
    background: repeat url(${PatterBg});
    padding-bottom: 1rem;
    margin-bottom: 7rem;

    >div >div >div >div {
        flex: 1;
        width: 50%;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const ImageWrapper = styled.div`
    margin-top: -3rem;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`
