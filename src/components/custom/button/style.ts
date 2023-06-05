import styled from "styled-components";

export type StyledButtonType = {
    $bg?: string
    $color?: string
    $p?: string
    $w?: string
    $h?: string
    $fsize?: string
}

export const StyledButton = styled.button<StyledButtonType>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    text-transform: uppercase;
    font-weight: 700;

    ${({ $w }) => $w ? `width: ${$w};` : ``}
    ${({ $h }) => `line-height: ${$h ? $h : '3rem'};`}
    ${({ $h }) => `min-height: ${$h ? $h : '3rem'};`}
    ${({ $p }) => `padding: ${$p ?? '0 1rem'};`}
    ${({ $bg }) => $bg ? `background: ${$bg};` : ``}
    ${({ $color }) => $color ? `color: ${$color};` : ``}
    ${({ $fsize }) => $fsize ? `font-size: ${$fsize};` : ``}
`
