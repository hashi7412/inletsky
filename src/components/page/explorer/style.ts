import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { GV } from "../../../utils/style.util";

const animation = keyframes`
    0% { transform: translate(0, 0) }
    20% { transform: translate(0, 15px) }
    40% { transform: translate(0, 30px) }
    60% { transform: translate(0, 15px) }
    80% { transform: translate(0, 30px) }
    100% { transform: translate(0, 0px) }
`

export const ExplorerContainer = styled(Link)`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 5;

    span {
        text-transform: uppercase;
        transform: rotate(-90deg);
        line-height: 135px;
        text-shadow: 0 0 10px ${GV("color")};
    }

    svg {
        animation-name: ${animation};
        animation-duration: 5s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        text-shadow: 0 0 10px ${GV("color")};
    }
`

export const ArrowDown = styled.span``;
