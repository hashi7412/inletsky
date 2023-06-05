import React from "react";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Grid from "../../../../components/basic/grid";
import Flex from "../../../../components/basic/flex";

const TechSection = () => {
    return (
        <Flex>
            <Flex>
                <Badge>Our Favorite Folder Of The</Badge>
                <Heading level={1}>Technologies</Heading>
            </Flex>
            <Grid>
                {/*  */}
            </Grid>
        </Flex>
    )
}

export default TechSection;
