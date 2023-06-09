import styled from "styled-components";
import Subsection from "../../../../components/layout/subsection";

export const Container = styled(Subsection)`
    padding: 4.3rem 3rem !important;
    background: rgba(26, 45, 71, 0.3);
    backdrop-filter: blur(20px);

    @media (max-width: 768px) {
        margin: 0 1rem;
    }
`