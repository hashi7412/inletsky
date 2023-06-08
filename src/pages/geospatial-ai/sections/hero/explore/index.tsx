import React from "react";
import { Span } from "../../../../../components/basic/text";
import { ExplorerContainer } from "./style";
import Icon from "../../../../../components/custom/icon";

const ExplorerButton = () => {
    return (
        <ExplorerContainer to={"#"}>
            <Span>Explore more</Span>
            <Icon icon="ScrollDown" />
        </ExplorerContainer>
    )
}

export default ExplorerButton;
