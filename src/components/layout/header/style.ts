import styled from "styled-components";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 157px;
    padding: 0 2.85rem;
    background: ${GV("bg")};
    border-bottom: 1px solid ${GV('bg-sub')};

    @media (max-width: 1200px) {
        height: 100px;
    }
`
