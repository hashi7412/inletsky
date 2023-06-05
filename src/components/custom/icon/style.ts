import styled from "styled-components";

export interface IconWrapperType {
    $width?: string
    $height?: string
    $color?: string
}

export const IconWrapper = styled.div<IconWrapperType>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $width }) => $width ? `width: ${$width};` : ``}
    ${({ $height }) => $height ? `height: ${$height};` : ``}
    ${({ $color }) => $color ? `color: ${$color};` : ``}
`