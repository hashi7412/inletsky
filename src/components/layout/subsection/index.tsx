import React from "react";
import { StyledSubsectionPropsType, SubsectionContainer } from "./style";

type SubsectionPropsType = StyledSubsectionPropsType & {
    children: any
}

const Subsection: React.FC<SubsectionPropsType> = ({
    children,
    $style,
    ...rest
}) => {
    $style = {
        mb: "12rem",
        p: "0 1rem",
        ...$style,
        queries: {
            768: {
                mb: "5rem",
                ...($style?.queries ? ["768"] : {})
            }
        }
    }
    return (
        <SubsectionContainer
            $style={$style}
            {...rest}
        >
            {children}
        </SubsectionContainer>
    )
}

export default Subsection;
