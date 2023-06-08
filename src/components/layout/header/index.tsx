import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../../basic/logo";
import Menu from "./components/menu";
import Flex from "../../basic/flex";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../custom/button";
import { GV } from "../../../utils/style.util";
import useScroll from "../../../hooks/useScroll";
import { Hamburger } from "./components/menu/style";

const Header = () => {
    const location = useLocation();

    const [, scrollY, dir] = useScroll();
    const [isHide, setIsHide] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBg, setIsBg] = useState<boolean>(false);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (scrollY >= 300 && dir === "up") {
            setIsHide(() => true)
        } else {
            setIsHide(() => false)
        }

        if (scrollY >= 300) {
            setIsBg(() => true)
        } else {
            setIsBg(() => false)
        }
    }, [scrollY])

    useEffect(() => {
        closeMenu();
    }, [location])

    return (
        <HeaderContainer isHide={isHide} isBg={isBg}>
            <HeaderWrapper>
                <Logo />
                <Menu isOpen={isOpen} closeMenu={closeMenu} />
                <Flex $style={{ vAlign: "center", gap: "1.75rem" }}>
                    <Hamburger isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
                        <span />
                    </Hamburger>
                    <Link to={""}>LOGIN</Link>
                    <Link to={""}>
                        <Button $style={{ bg: GV('danger') }}>SIGNUP</Button>
                    </Link>
                </Flex>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;
