import styled from "styled-components";
import SectionBg from "../../../../assets/illustration/section-bg.svg"

export const AppDevProcessContainer = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4.375rem 2rem;
    background: #1A2D474D;
    overflow: hidden;
    border-radius: 1.5rem;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: url(${SectionBg});
        content: "";
    }
`
