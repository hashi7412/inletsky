import styled, { keyframes } from "styled-components"
import { GV } from "../../utils/style.util"

const prevAnime = keyframes`
    0% {
        transform: translate(0px);
    }
    50% {
        transform: translate(-10px);
    }
    100% {
        transform: translate(0px);
    }
`

const nextAnime = keyframes`
    0% {
        transform: translate(0px);
    }
    50% {
        transform: translate(10px);
    }
    100% {
        transform: translate(0px);
    }
`

export const PrevButton = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all ease-in-out .1s;

    &:after {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
        transform: translate(-40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }

    &:hover {
        transform: scale(1.1);

        & svg {
            animation-name: ${prevAnime};
            animation-duration: 1s;
            animation-iteration-count: infinite;
        }
    }
`

export const NextButton = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all ease-in-out .1s;

    &:after {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
        transform: translate(40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }

&:hover {
    transform: scale(1.1);

    & svg {
        animation-name: ${nextAnime};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
}
`