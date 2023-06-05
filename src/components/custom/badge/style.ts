import styled from "styled-components";
import variables from "../../../style/variable";

export const BadgeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 1rem;
    border: 2px solid ${variables['--danger']};
    border-radius: 10rem;
    font-size: 0.75rem;
`
