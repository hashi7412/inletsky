import styled from "styled-components";
import variables from "../../../../style/variable";
import { GV } from "../../../../utils/style.util";

export const Seperator = styled.span`
    display: inline-block;
    align-self: center;
    width: 80%;
    height: 6px;
    margin: 2.625rem 0;
    background: ${GV("danger")};
    border-radius: 5rem;
`