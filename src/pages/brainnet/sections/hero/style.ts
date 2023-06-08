import styled from "styled-components";
import Bg from "../../../../assets/img/home-hero.png";
import Flex from "../../../../components/basic/flex";

export const StyledHeroContainer = styled(Flex)`
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-bottom: 7rem;

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: no-repeat url(${Bg});
        background-position: top;
        background-size: cover;
        content: "";
        z-index: -2;

        @media (max-width: 768px) {
            background-position: center 150px;
        }

        @media (max-width: 600px) {
            background-position: center 300px;
        }
    }

    &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: linear-gradient(#02153000, #021530);
        background-position: top;
        background-size: cover;
        content: "";
        z-index: -1;
    }

    @media (max-width: 600px) {
        height: calc(100vh + 200px);
    }
`