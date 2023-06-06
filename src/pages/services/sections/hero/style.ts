import styled from "styled-components";
import Flex from "../../../../components/basic/flex";

export const HeroContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100vh;
    padding: 3rem 6.25rem 0;
    margin-bottom: 7rem;

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 1rem;
    }
`

export const ImageWrapper = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`
