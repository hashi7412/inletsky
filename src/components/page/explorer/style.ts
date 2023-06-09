import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
    }

    svg {
        animation-name: ${animation};
        animation-duration: 3s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
    }
`