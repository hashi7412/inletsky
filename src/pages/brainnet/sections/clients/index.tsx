import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Link from "../../../../components/basic/link";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";
import Grid from "../../../../components/basic/grid";

import Img1 from "../../../../assets/illustration/partners/1.svg"
import Img2 from "../../../../assets/illustration/partners/2.svg"
import Img3 from "../../../../assets/illustration/partners/3.svg"
import Img4 from "../../../../assets/illustration/partners/4.png"
import Img5 from "../../../../assets/illustration/partners/5.svg"
import Img6 from "../../../../assets/illustration/partners/6.svg"
import Img7 from "../../../../assets/illustration/partners/7.svg"
import Img8 from "../../../../assets/illustration/partners/8.svg"
import Img9 from "../../../../assets/illustration/partners/9.svg"
import Img10 from "../../../../assets/illustration/partners/10.svg"
import Img11 from "../../../../assets/illustration/partners/11.svg"
import Img12 from "../../../../assets/illustration/partners/12.svg"
import Img13 from "../../../../assets/illustration/partners/13.svg"
import Img14 from "../../../../assets/illustration/partners/14.svg"
import Img15 from "../../../../assets/illustration/partners/15.svg"

const ClientSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "6rem"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    gap: "1rem",
                    queries: {
                        768: {
                            vAlign: "center"
                        }
                    }
                }}>
                    <Badge>Trusted by the industry leaders</Badge>
                    <Heading level={1}>Our Clients</Heading>
                </Flex>
                <Grid $style={{
                    justifyContent: "center",
                    justifyItems: "center",
                    gap: "2rem",
                    w: "100%",
                    columns: "5",
                    queries: {
                        768: {
                            columns: "3"
                        }
                    }
                }}>
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img4} />
                    <img src={Img5} />
                    <img src={Img6} />
                    <img src={Img7} />
                    <img src={Img8} />
                    <img src={Img9} />
                    <img src={Img10} />
                    <img src={Img11} />
                    <img src={Img12} />
                    <img src={Img13} />
                    <img src={Img14} />
                    <img src={Img15} />
                </Grid>
                <Link to="" $style={{
                    color: GV("danger"),
                    textTransform: "uppercase"
                }}>View customere stories  →</Link>
            </Flex>
        </Subsection>
    )
}

export default ClientSection;
