import React from "react";
import { HeaderContainer } from "./style";
import Logo from "../../basic/Logo";
import Menu from "./components/menu";
import Flex from "../../basic/flex";
import { Link } from "react-router-dom";
import Button from "../../custom/button";
import variables from "../../../style/variable";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Flex $style={{ vAlign: "center", gap: "1.75rem" }}>
                <Link to={""}>LOGIN</Link>
                <Link to={""}>
                    <Button $style={{ bg: variables['--danger'] }}>SIGNUP</Button>
                </Link>
            </Flex>
        </HeaderContainer>
    )
}

export default Header;
