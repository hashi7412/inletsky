import styled from "styled-components"
import { GV } from "../../../utils/style.util"

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    background: ${GV("bg")};
    border-bottom: 1px solid #D0D0E360;
    z-index: 8000;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    margin: 0 auto;
    height: 100px;
    gap: 2rem;

    .hamburger {
        display: none;
        cursor: pointer;

        @media screen and (max-width:1120px) {
            display: block;
        }
    }

    #rwd__menu {
        display: none;
    }

    #rwd__menu:checked +menu {
        width: 100vw;
    }

    .rwd__close {
        display: none;
        position: absolute;
        top: 2rem;
        right: 2rem;
        color: ${GV("bg")};
        cursor: pointer;

        @media screen and (max-width:1120px) {
            display: block;
        }
    }

    menu {
        @media (max-width: 1120px) {
            position: fixed;
            left: 0;
            top: 0;
            background-color: white;
            overflow: hidden;
            width: 0;
            z-index: 90;
            height: 100vh;
            transition: all .8s;
        }

        ul {
            @media screen and (max-width:1120px) {
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            li {
                white-space: nowrap;
                
                > a{
                    @media (max-width: 1120px) {
                        color: ${GV('bg')};
                    }
                }

                &:last-child {
                    display: none;
                    @media screen and (max-width:580px) {
                        display: block;
                    }
                }

            }
        }
    }

    .login__btn {
        @media screen and (max-width:580px) {
            display: none;
        }
    }
`