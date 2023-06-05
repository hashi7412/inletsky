import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import List, { ListItem } from "../../../../components/basic/list";
import Link from "../../../../components/basic/link";

const HeroSection = () => {
    return (
        <Flex>
            <Badge>Explore what’s new with inletsky</Badge>
            <Flex>
                <Flex>
                    <Heading level={1}>Innovative Web Solutions</Heading>
                    <P>We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. </P>
                    <List>
                        <ListItem>Latest web technologies like Elixir, ReactJS, Laravel, Node.js</ListItem>
                        <ListItem>Wallet-friendly engagement models to hire developers</ListItem>
                        <ListItem>Daily collaborative meetings with product managers</ListItem>
                        <ListItem>Free full-cycle quality assurance</ListItem>
                    </List>
                    <Link to="">want a free consultation  →</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HeroSection;