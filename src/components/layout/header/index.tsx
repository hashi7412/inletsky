import React from "react";
import { HeaderContainer, HeaderWrapper } from "./style";
import Logo from "../../basic/Logo";
import Menu from "./components/menu";
import Flex from "../../basic/flex";
import { Link } from "react-router-dom";
import Button from "../../custom/button";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";
import Icon from "../../custom/icon";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Logo />
                <Flex
                    $style={{
                        flex: "1",
                        vAlign: "center",
                        hAlign: "space-between",
                        p: "0 0 0 25%",
                        queries: {
                            1120: {
                                p: "0",
                                hAlign: "flex-end",
                                gap: "2rem"
                            }
                        }
                    }}
                >
                    <label className="hamburger" htmlFor="rwd__menu">
                        <Icon icon="Menu" />
                    </label>
                    <input id="rwd__menu" type="checkbox" />
                    <Menu />
                    <Flex className="login__btn" $style={{ vAlign: "center", gap: "1.75rem" }}>
                        <Link to={""}>LOGIN</Link>
                        <Link to={""}>
                            <Button $style={{ bg: GV('danger') }}>SIGNUP</Button>
                        </Link>
                    </Flex>
                </Flex>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header;
