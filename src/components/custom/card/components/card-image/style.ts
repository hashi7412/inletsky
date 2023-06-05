import styled from "styled-components"
import Flex from "../../../flex"

export type CardImageContainerType = {
    bg?: string
}

export const CardImageContainer = styled(Flex)<CardImageContainerType>`
    position: relative;
    ${({ bg }) => `background: ${bg};`}
    padding-bottom: 90%;
`

export const CardImageStyled = styled.img`
    position: absolute;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 64%;
    bottom: 18%;
`
