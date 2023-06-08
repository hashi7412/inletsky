import React from "react";
import { StyledHeroContainer, StyledHeroContainerPropsType } from "./style";

type HeroSectionPropsType = StyledHeroContainerPropsType & {
    children: any
}

const HeroContainer: React.FC<HeroSectionPropsType> = ({
    children,
    $style
}) => {
    return (
        <StyledHeroContainer
            $style={$style}
        >
            {children}
        </StyledHeroContainer>
    )
}

export default HeroContainer;
