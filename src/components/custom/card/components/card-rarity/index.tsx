import React from "react";
import { CardRarityContainer } from "./style";

const CardRarity = () => {
    return (
        <CardRarityContainer>
            <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M13,2 L13,10 C13,10.8284271 12.6642136,11.5784271 12.1213203,12.1213203 C11.5784271,12.6642136 10.8284271,13 10,13 L10,13 L2,13 L2,5 C2,4.17157288 2.33578644,3.42157288 2.87867966,2.87867966 C3.42157288,2.33578644 4.17157288,2 5,2 L5,2 L13,2 Z" id="Rectangle" fill="none" stroke="currentColor" stroke-width="4"></path>
            </svg>
        </CardRarityContainer>
    )
}

export default CardRarity;
