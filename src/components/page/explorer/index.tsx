import React from "react";
import { ExplorerContainer } from "./style";
import { Span } from "../../basic/text";
import Icon from "../../custom/icon";

const ExplorerButton = () => {
    return (
        <ExplorerContainer to={"#"}>
            <Span>Explore more</Span>
            <Icon icon="ScrollDown" />
        </ExplorerContainer>
    )
}

export default ExplorerButton;
