import { Link } from "react-router-dom";
import styled from "styled-components";
import variables from "../../../style/variable";

export const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${variables['--danger']};
`