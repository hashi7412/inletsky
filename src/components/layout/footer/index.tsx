import React from "react";
import { FooterContainer } from "./style";
import Flex from "../../basic/flex";
import Logo from "../../basic/Logo";
import List, { ListItem } from "../../basic/list";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <Flex>
                <Flex $style={{ hAlign: 'space-between', w: "100%" }}>
                    <Logo />
                    <List dir="column">
                        <ListItem hideDot>
                            <Link to={""}>Fleet</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Address Autofill</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Navigation SDK</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Dash</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Search</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Maps</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Mobile Maps SDK</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Studio</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Data</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Vision</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Atlas</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Pricing</Link>
                        </ListItem>
                    </List>
                    <List dir="column">
                        <ListItem hideDot>
                            <Link to={""}>Industries</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Use Cases</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>How-to Videos</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Webinars</Link>
                            <Link to={""}>Events</Link>
                        </ListItem>
                    </List>
                    <List dir="column">
                        <ListItem hideDot>
                            <Link to={""}>Help</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Support Services</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Documentation</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Open source</Link>
                        </ListItem>
                    </List>
                    <List dir="column">
                        <ListItem hideDot>
                            <Link to={""}>Customers</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Customers</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Community</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Careers</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Sustainability</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Diversity & Inclusion</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Team</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Blog</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Press</Link>
                        </ListItem>
                        <ListItem hideDot>
                            <Link to={""}>Contact</Link>
                        </ListItem>
                    </List>
                </Flex>
            </Flex>
        </FooterContainer>
    )
}

export default Footer;
