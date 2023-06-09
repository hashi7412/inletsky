import React from "react";
import { motion } from "framer-motion";
import { ExplorerContainer } from "./style";

import { Span } from "../../basic/text";
import Icon from "../../custom/icon";
import Flex from "../../basic/flex";

const ExplorerButton = () => {
    return (
        <ExplorerContainer to={"#"}>
            <motion.div
                initial={{ opacity: 0, translateY: "150%" }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <Flex $style={{
                    fDirection: "column",
                    hAlign: "center",
                    vAlign: "center"
                }}>
                    <Span>Explore more</Span>
                    <Icon icon="ScrollDown" />
                </Flex>
            </motion.div>
        </ExplorerContainer>
    )
}

export default ExplorerButton;
