import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../../utils/style.util";

import Subsection from "../../../../components/layout/subsection";
import Flex from "../../../../components/basic/flex";
import Grid from "../../../../components/basic/grid";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Link from "../../../../components/basic/link";

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
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 1 }}
                >
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
                </motion.div>
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img1} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img2} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img3} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img4} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img5} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img6} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.35 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img7} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img8} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.45 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img9} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img10} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.55 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img11} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img12} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.65 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img13} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img14} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.75 }}
                        viewport={{ once: true }}
                    >
                        <img src={Img15} />
                    </motion.div>
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
