import React from "react";
import { CardImageContainer, CardImageContainerType, CardImageStyled } from "./style";

interface CardImageProps extends CardImageContainerType, Partial<HTMLImageElement> { }

const CardImage: React.FC<CardImageProps> = ({
    bg,
    src
}) => {
    return (
        <CardImageContainer bg={bg}>
            <CardImageStyled src={src} />
        </CardImageContainer>
    )
}

export default CardImage;
