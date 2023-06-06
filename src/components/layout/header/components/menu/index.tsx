import React from "react";
import Flex from "../../../../basic/flex";
import Icon from "../../../../custom/icon";
import { MenuContainer, MenuLink } from "./style";

const Menu = () => {
    return (
        <MenuContainer>
            <label htmlFor="rwd__menu" className={'rwd__close'}><Icon icon="Close" /></label>
            <Flex
                as={"ul"}
                $style={{
                    gap: "1.875rem"
                }}
            >
                <Flex as={"li"}>
                    <MenuLink to={""}>
                        Solutions
                        <Icon icon="ChevronArrowDown" />
                    </MenuLink>
                </Flex>
                <Flex as={"li"}>
                    <MenuLink to={""}>
                        developers
                        <Icon icon="ChevronArrowDown" />
                    </MenuLink>
                </Flex>
                <Flex as={"li"}>
                    <MenuLink to={""}>
                        customers
                    </MenuLink>
                </Flex>
                <Flex as={"li"}>
                    <MenuLink to={""}>
                        blog
                    </MenuLink>
                </Flex>
                <Flex as={"li"}>
                    <MenuLink to={""}>
                        Login
                    </MenuLink>
                </Flex>
            </Flex>
        </MenuContainer>
    )
}

export default Menu;
