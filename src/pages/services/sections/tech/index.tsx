import React from "react";
import { motion } from "framer-motion"

import Subsection from "../../../../components/layout/subsection";
import Badge from "../../../../components/custom/badge";
import { Flex, Grid, Heading } from "../../../../components/basic";

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
import useStore from "../../../../useStore";

const TechSection = () => {

    const { T } = useStore();

    return (
        <Subsection>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "4rem" }}>
                <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Badge>{T("services.tech.badge")}</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <Heading level={1} $style={{ align: "center" }}>{T("services.tech.title")}</Heading>
                    </motion.div>
                </Flex>
                <Grid
                    $style={{
                        w: "100%",
                        gap: "2rem",
                        columns: "7",
                        p: "0 2rem",
                        queries: {
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge1} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge2} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge3} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge4} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge5} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge6} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.35 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge7} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge8} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.45 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge9} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge10} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.55 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge11} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge12} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.65 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge13} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge14} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.75 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge15} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge16} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.85 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge17} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge18} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.95 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge19} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge20} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1.05 + 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={TechIamge21} />
                    </motion.div>
                </Grid>
            </Flex>
        </Subsection>
    )
}

export default TechSection;
