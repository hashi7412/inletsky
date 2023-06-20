import React from "react";
import { FooterContainer } from "./style";
import Flex from "../../basic/flex";
import Logo from "../../basic/logo";
import List, { ListItem } from "../../basic/list";
import Heading from "../../basic/heading";
import { GV } from "../../../utils/style.util";
import { Span } from "../../basic/text";
import Icon from "../../custom/icon";
import Link from "../../basic/link";
import useStore from "../../../useStore";

const Footer = () => {

    const {T} = useStore();

    return (
        <FooterContainer>
            <Flex
                $style={{
                    fDirection: "column",
                    gap: "2.5rem"
                }}
            >
                <Flex
                    $style={{
                        hAlign: 'space-between',
                        w: "100%",
                        queries: {
                            768: {
                                fDirection: "column",
                                gap: "2rem"
                            }
                        }
                    }}
                >
                    <Logo />
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>{T("footer.products")}</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.fleet")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.addressautofill")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.navigationsdk")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.dash")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.search")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.maps")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.mobilemapssdk")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.studio")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.data")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.vision")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.atlas")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.products.pricing")}</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>{T("footer.resources")}</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.resources.industries")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.resources.usecases")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.resources.howtovideos")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Webinars</Link>
                                <Link to={""}>Events</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>{T("footer.support")}</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.support.help")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.support.supportservices")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.support.documentation")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.support.opensource")}</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>{T("footer.company")}</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.customers")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.community")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.careers")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.sustainability")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.diversity")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.team")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.blog")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.press")}</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>{T("footer.company.contact")}</Link>
                            </ListItem>
                        </List>
                    </Flex>
                </Flex>
                <Flex
                    $style={{
                        hAlign: "space-between",
                        queries: {
                            768: {
                                fDirection: "column",
                                hAlign: "center",
                                vAlign: "center",
                                gap: "1rem"
                            }
                        }
                    }}
                >
                    <Flex $style={{ gap: "1rem" }}>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>T{"footer.copyright"}</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>T{"footer.terms"}</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>T{"footer.privacy"}</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>T{"footer.security"}</Span>
                        </Link>
                        <select style={{ background: "var(--bg)" }}>
                            <option>en</option>
                            <option>zh</option>
                        </select>
                    </Flex>
                    <Flex $style={{ gap: "2rem", hAlign: "center" }}>
                        <Link to={""}>
                            <Icon icon="Github" />
                        </Link>
                        <Link to={""}>
                            <Icon icon="Twitter" />
                        </Link>
                        <Link to={""}>
                            <Icon icon="Linkedin" />
                        </Link>
                        <Link to={""}>
                            <Icon icon="FaceBook" />
                        </Link>
                        <Link to={""}>
                            <Icon icon="Instagram" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </FooterContainer>
    )
}

export default Footer;
