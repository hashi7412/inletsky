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

const Footer = () => {
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
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>Products</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Fleet</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Address Autofill</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Navigation SDK</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Dash</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Search</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Maps</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Mobile Maps SDK</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Studio</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Data</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Vision</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Atlas</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Pricing</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>Resources</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Industries</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Use Cases</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>How-to Videos</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Webinars</Link>
                                <Link to={""}>Events</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>SUPPORT</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Help</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Support Services</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Documentation</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Open source</Link>
                            </ListItem>
                        </List>
                    </Flex>
                    <Flex $style={{ fDirection: "column", gap: "0.7rem" }}>
                        <Heading level={6} $style={{ txtTransform: "uppercase" }}>company</Heading>
                        <List dir="column" gap="0.5rem">
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Customers</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Customers</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Community</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Careers</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Sustainability</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Diversity & Inclusion</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Team</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Blog</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Press</Link>
                            </ListItem>
                            <ListItem hideDot $style={{ size: "0.8rem", color: GV('input-color') }}>
                                <Link to={""}>Contact</Link>
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
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>© Inletsky</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>Terms</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>Privacy</Span>
                        </Link>
                        <Link to={""}>
                            <Span $style={{color: GV("color-secondary"), size: "0.8rem"}}>Security</Span>
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
