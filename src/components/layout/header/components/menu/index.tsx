import React from "react";
import Flex from "../../../../basic/flex";
import Icon from "../../../../custom/icon";
import { Hamburger, MenuContainer, MenuLink, Nav, StyledMenuItem, Submenu, SubmenuItem } from "./style";

type MenuPropsType = {
    isOpen: boolean
    closeMenu: any
}

type MenuLinkItemPropsType = {
    to: string
    label: string
}

type MenuItemPropsType = MenuLinkItemPropsType | { label: string, submenu: MenuLinkItemPropsType[] }

const MenuItem: React.FC<MenuItemPropsType> = (props) => {

    let label = props.label;
    let to = "#";
    let submenu: MenuLinkItemPropsType[] | null = null;

    if ('to' in props) {
        to = props.to;
    } else {
        submenu = props.submenu;
    }

    return (
        <MenuLink>
            <StyledMenuItem to={to}>
                {label}
                {!('to' in props) && (
                    <Icon icon="ChevronArrowDown" />
                )}
            </StyledMenuItem>
            {submenu !== null && (
                <Submenu>
                    {submenu.map((item: MenuLinkItemPropsType, index: number) => (
                        <Flex key={index} as={"li"}>
                            <SubmenuItem to={item.to}>
                                {item.label}
                            </SubmenuItem>
                        </Flex>

                    ))}

                </Submenu>
            )}
        </MenuLink>
    )
}

const Menu: React.FC<MenuPropsType> = ({ isOpen, closeMenu }) => {
    return (
        <MenuContainer isOpen={isOpen}>
            <Nav>
                <MenuItem label="Solutions" submenu={[
                    { label: "Home", to: "/" },
                    { label: "Services", to: "/services" },
                    { label: "Geospatial AI", to: "/geospatial-ai" },
                    { label: "Multi-Cloud Solutions", to: "/solutions" }
                ]} />
                <MenuItem label="developers" submenu={[
                    { label: "Web Designers", to: "/" },
                    { label: "Frontend Developers", to: "/" },
                    { label: "Backend Developers", to: "/" },
                    { label: "Project Manager", to: "/" },
                    { label: "Quality Assurance Engineer", to: "/" }
                ]} />
                <MenuItem to="" label="customers" />
                <MenuItem to="" label="blog" />
                <MenuItem to="" label="Login" />
            </Nav>
        </MenuContainer>
    )
}

export default Menu;
