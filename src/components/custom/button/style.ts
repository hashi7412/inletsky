import styled from "styled-components";
import { GV } from "../../../utils/style.util";

export type StyledButtonType = {
    bg?: string
    color?: string
    p?: string
    w?: string
    h?: string
    fsize?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    text-transform: uppercase;
    border-radius: 5rem;
    transition: all ease-in-out .3s;

    ${({ w }) => w ? `width: ${w};` : ``}
    ${({ h }) => `line-height: ${h ? h : '2.69rem'};`}
    ${({ h }) => `min-height: ${h ? h : '2.69rem'};`}
    ${({ p }) => `padding: ${p ?? '0 2rem'};`}
    ${({ bg }) => bg ? `background: ${bg};` : ``}
    ${({ color }) => color ? `color: ${color};` : ``}
    ${({ fsize }) => fsize ? `font-size: ${fsize};` : ``}

    &:hover {
        box-shadow: 0 0 10px 0 #898989a0;
    }
`
