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
                initial={{ translateY: "100%" }}
                animate={{ translateY: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
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
