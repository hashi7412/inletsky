import React from "react";
import { FooterContainer } from "./style";
import Flex from "../../basic/flex";
import Logo from "../../basic/Logo";
import List, { ListItem } from "../../basic/list";
import { Link } from "react-router-dom";
import Heading from "../../basic/heading";
import { GV } from "../../../utils/style.util";

const Footer = () => {
    return (
        <FooterContainer>
            <Flex>
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
            </Flex>
        </FooterContainer>
    )
}

export default Footer;
