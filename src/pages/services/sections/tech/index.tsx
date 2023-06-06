import React from "react";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Grid from "../../../../components/basic/grid";
import Flex from "../../../../components/basic/flex";
import TechIamge1 from "../../../../assets/illustration/tech/1.svg"
import TechIamge2 from "../../../../assets/illustration/tech/2.svg"
import TechIamge3 from "../../../../assets/illustration/tech/3.svg"
import TechIamge4 from "../../../../assets/illustration/tech/4.svg"
import TechIamge5 from "../../../../assets/illustration/tech/5.svg"
import TechIamge6 from "../../../../assets/illustration/tech/6.svg"
import TechIamge7 from "../../../../assets/illustration/tech/7.svg"
import TechIamge8 from "../../../../assets/illustration/tech/8.svg"
import TechIamge9 from "../../../../assets/illustration/tech/9.svg"
import TechIamge10 from "../../../../assets/illustration/tech/10.svg"
import TechIamge11 from "../../../../assets/illustration/tech/11.svg"
import TechIamge12 from "../../../../assets/illustration/tech/12.svg"
import TechIamge13 from "../../../../assets/illustration/tech/13.svg"
import TechIamge14 from "../../../../assets/illustration/tech/14.svg"
import TechIamge15 from "../../../../assets/illustration/tech/15.svg"
import TechIamge16 from "../../../../assets/illustration/tech/16.svg"
import TechIamge17 from "../../../../assets/illustration/tech/17.svg"
import TechIamge18 from "../../../../assets/illustration/tech/18.svg"
import TechIamge19 from "../../../../assets/illustration/tech/19.svg"
import TechIamge20 from "../../../../assets/illustration/tech/20.svg"
import TechIamge21 from "../../../../assets/illustration/tech/21.svg"

const TechSection = () => {
    return (
        <Flex $style={{ fDirection: "column", vAlign: "center", gap: "4rem", mb: "7rem" }}>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                <Badge>Our Favorite Folder Of The</Badge>
                <Heading level={1} $style={{ align: "center" }}>Technologies</Heading>
            </Flex>
            <Grid
                $style={{
                    w: "100%",
                    gap: "2rem",
                    columns: "7",
                    p: "0 2rem",
                    $queries: {
                        992: {
                            columns: "5"
                        },
                        768: {
                            columns: "4"
                        },
                        600: {
                            columns: "3"
                        }
                    }
                }}
            >
                <img src={TechIamge1} />
                <img src={TechIamge2} />
                <img src={TechIamge3} />
                <img src={TechIamge4} />
                <img src={TechIamge5} />
                <img src={TechIamge6} />
                <img src={TechIamge7} />
                <img src={TechIamge8} />
                <img src={TechIamge9} />
                <img src={TechIamge10} />
                <img src={TechIamge11} />
                <img src={TechIamge12} />
                <img src={TechIamge13} />
                <img src={TechIamge14} />
                <img src={TechIamge15} />
                <img src={TechIamge16} />
                <img src={TechIamge17} />
                <img src={TechIamge18} />
                <img src={TechIamge19} />
                <img src={TechIamge20} />
                <img src={TechIamge21} />
            </Grid>
        </Flex>
    )
}

export default TechSection;
