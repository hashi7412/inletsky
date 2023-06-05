import React from "react";
import { CardCategory, CardContainer, CardName, Payload } from "./style";
import Flex from "../flex";
import CardImage from "./components/card-image";
import CardRarity from "./components/card-rarity";
import { Badge } from "../Badge";

type CardProps = ProductType & {
    active?: boolean,
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({
    image,
    name,
    price,
    category,
    maxPrice,
    minPrice,
    active,
    onClick
}) => {
    return (
        <CardContainer onClick={onClick}>
            <Payload active={active ?? false} />
            <Flex $fDirection="column" $gap="1rem">
                <CardImage src={'../../assets/' + image} bg="#F9E6C2" />
                <Flex $fDirection="column" $gap="0.5rem">
                    <CardName>{name}</CardName>
                    <CardCategory>{category}</CardCategory>
                </Flex>
                <Badge>${price.toLocaleString()}</Badge>
            </Flex>
            <CardRarity />
        </CardContainer>
    )
}

export default Card;
