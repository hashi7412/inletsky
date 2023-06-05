import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";

export const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${GV("danger")};
`