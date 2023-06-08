import styled from "styled-components";

import Bg from "../../assets/illustration/multi-cloud-solutions.svg"
import Bg1 from "../../assets/illustration/multi-cloud-solutions-1.svg"

export const BgSection = styled.div`
    position: relative;

    &:before,
    &:after {
        position: absolute;
        top: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        z-index: -1;
    }

    &:before {
        background: no-repeat url(${Bg});
        background-position: center calc(100vh / 3);
    }

    &:after {
        background: no-repeat url(${Bg1});
        background-position: center calc(100vh - 150px);
        background-size: contain;
        mix-blend-mode: soft-light;

        @media (max-width: 1440px) {
            background-size: 1440px auto;
        }
    }
`
