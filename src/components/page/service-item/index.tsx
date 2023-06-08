import React from "react";
import Flex from "../../basic/flex";
import Badge from "../../custom/badge";
import Heading from "../../basic/heading";
import { P } from "../../basic/text";
import { GV } from "../../../utils/style.util";
import Link from "../../basic/link";

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
            <img src={img} />
            <Flex $style={{
                fDirection: "column",
                vAlign: "flex-start",
                gap: "2rem"
            }}>
                <Badge>{badge}</Badge>
                <Heading level={1}>{title}</Heading>
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
                <Link to={link.to} $style={{
                    color: GV("danger"),
                    textTransform: "uppercase"
                }}>{link.label}</Link>
            </Flex>
        </Flex>
    )
}

export default ServiceItem
