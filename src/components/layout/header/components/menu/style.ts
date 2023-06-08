import { Link } from "react-router-dom";
import styled from "styled-components";
import { GV } from "../../../../../utils/style.util";

export const SubmenuItem = styled(Link)`
    display: flex;
    padding: 0 1rem;
    background: ${GV("bg")};
    border-radius: 10px;
    color: ${GV("color-secondary")};
    line-height: 50px;
    text-transform: capitalize;
    white-space: nowrap;
    transition: all ease-in-out .3s;

    &:hover {
        background: ${GV("bg-sub")};
        color: ${GV("color")};
    }
`

export const Submenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    flex-direction: column;
    width: auto;
    padding: 0.5rem 0.5rem;
    background: ${GV("bg")};
    opacity: 0.5;
    box-shadow: 0 0 50px 0 ${GV("bg-sub")};
    border: 1px solid ${GV("bg-sub")};
    border-radius: 10px;
    transition: all ease-in-out .3s;
    z-index: 5;

    > li {
        display: block;
        width: 100%;

        & ${SubmenuItem} {
            color: ${GV("color-secondary")};
        }

        &:hover {
            ${SubmenuItem} {
                color: ${GV("color")};
            }
        }
    }
`

export const StyledMenuItem = styled(Link)`
    color: ${GV("color-secondary")};
`

export const MenuLink = styled.li`
    position: relative;

    > a {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 1rem;
        line-height: 60px;
        text-transform: uppercase;
        
        @media (max-width: 1120px) {
            color: ${GV("bg")};
            justify-content: space-between;
        }
    }

    &:last-child {
        display: none;

        @media (max-width: 600px) {
            display: block;
        }
    }

    &:hover {
        ${Submenu} {
            display: flex;
            opacity: 1;
        }

        ${StyledMenuItem} {
            color: ${GV("color")};

            @media (max-width: 1120px) {
                color: ${GV("bg")};
            }
        }
    }

    @media (max-width: 1120px) {
        width: 100%;

        > a {
            gap: 1rem;
            width: 100%;
        }
    }
`

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.875rem;

    @media (max-width: 1120px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Hamburger = styled.span<{ isOpen: boolean }>`
    position: relative;
	display: none;
    width: 30px;
    height: 30px;
    z-index: 9000;
    transition: all ease-in-out .3s;
    cursor: pointer;

    span,
    &:after,
    &:before {
        position: absolute;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 2px;
        background: ${GV("color")};
        border-radius: 1rem;
        transition: all ease-in-out .3s;
        content: "";
    }

    span {
        top: 50%;
        transform: translate(0, -50%);
    }

    &:after {
        top: 10%;
    }

    &:before {
        bottom: 10%;
    }

    @media (max-width: 1120px) {
        display: inline-block;

        ${({ isOpen }) => isOpen ? `
            span,
            &:after,
            &:before {
                background: ${GV("bg")};
            }

            &:before {
                transform: translate3d(0,-11px,0) rotate(-225deg);
            }
            
            & span {
                transform: rotate(0deg) translateZ(0);
                opacity: 0;
            }
            
            &:after {
                transform: translate3d(0,11px,0) rotate(225deg);
            }
        ` : ``}
    }
`

export const MenuContainer = styled.nav < { isOpen: boolean }>`
    display: flex;
    align-items: center;

    @media (max-width: 1120px) {
        position: fixed;
        left: 0;
        top: 0;
        justify-content: center;
        background-color: white;
        overflow: hidden;
        width: 0;
        z-index: 90;
        height: 100vh;
        transition: all .5s;

        ${({ isOpen }) => isOpen ? `
            width: 100%;
        ` : ``}
    }
`
