import React from "react";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Grid from "../../../../components/basic/grid";
import Flex from "../../../../components/basic/flex";

const TechSection = () => {
    return (
        <Flex $style={{ fDirection: "column", vAlign: "center", mb: "7rem" }}>
            <Flex $style={{ fDirection: "column", vAlign: "center" }}>
                <Badge>Our Favorite Folder Of The</Badge>
                <Heading level={1} $style={{ align: "center" }}>Technologies</Heading>
            </Flex>
            <Grid>
                {/*  */}
            </Grid>
        </Flex>
    )
}

export default TechSection;
