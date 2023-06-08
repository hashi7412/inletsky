import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";

import Img1 from "../../../../assets/illustration/partners/1.svg"
import Img2 from "../../../../assets/illustration/partners/2.svg"
import Img3 from "../../../../assets/illustration/partners/3.svg"
import Img4 from "../../../../assets/illustration/partners/4.png"
import Img5 from "../../../../assets/illustration/partners/5.svg"
import Link from "../../../../components/basic/link";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";
import Grid from "../../../../components/basic/grid";

const PatnersSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "6rem"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    gap: "1rem"
                }}>
                    <Badge>WE WORK WITH SOME OF THE BEST TO UNLOCK IMPOSSIBLE AI.</Badge>
                    <Heading level={1}>Our Partners</Heading>
                </Flex>
                <Grid $style={{
                    justifyItems: "center",
                    w: "100%",
                    columns: "5"
                }}>
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img4} />
                    <img src={Img5} />
                </Grid>
                <Link to="" $style={{
                    color: GV("danger"),
                    textTransform: "uppercase"
                }}>View customere stories  →</Link>
            </Flex>
        </Subsection>
    )
}

export default PatnersSection;
