import React from "react";
import { motion } from "framer-motion";
import { GV } from "../../../utils/style.util";

import Flex from "../../basic/flex";
import Badge from "../../custom/badge";
import Heading from "../../basic/heading";
import { P } from "../../basic/text";
import Link from "../../basic/link";
import { ImageWrapper } from "./style";

type ServiceItemPropsType = {
    img: any
    badge: string
    title: string
    desc: string
    link: {
        label: string
        to: string
    }
    isReverse?: boolean
}

const ServiceItem: React.FC<ServiceItemPropsType> = ({
    img,
    badge,
    title,
    desc,
    link,
    isReverse
}) => {
    return (
        <Flex $style={{
            fDirection: isReverse ? "row-reverse" : "row",
            vAlign: isReverse ? "flex-start" : "flex-end",
            gap: "6rem",
            queries: {
                768: {
                    fDirection: "column-reverse",
                    vAlign: "flex-start",
                    gap: "2rem"
                }
            }
        }}>
            <ImageWrapper>
                <motion.div
                    initial={{ opacity: 0, translateX: isReverse ? 40 : -40 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img src={img} />
                </motion.div>
            </ImageWrapper>
            <Flex $style={{
                flex: "10",
                fDirection: "column",
                vAlign: "flex-start",
                gap: "2rem"
            }}>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Badge>{badge}</Badge>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Heading level={1}>{title}</Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <P $style={{
                        size: "20px",
                        queries: {
                            768: {
                                size: "14px"
                            },
                            600: {
                                size: "10px"
                            }
                        }
                    }}>Style your map with lines, polygons, labels, icons, patterns, extrusions, raster & terrain with hundreds of options and a powerful expression language, not only controlling all visual aspects through the zoom range but having the freedom to change them at any time dynamically.</P>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Link to={link.to} $style={{
                        color: GV("danger"),
                        textTransform: "uppercase"
                    }}>{link.label}</Link>
                </motion.div>
            </Flex>
        </Flex>
    )
}

export default ServiceItem
