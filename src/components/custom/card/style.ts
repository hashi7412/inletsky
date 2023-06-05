import styled from "styled-components";

type CardImageProps = {
    $bg?: string
}

export const Payload = styled.div<{active: boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: transparent;
    transition: all ease-in-out .4s;

    ${({ active }) => active && `
        & {
            border: 1px solid #3d9d43;
            :after {
                transform: scale(100);
                opacity: 1 !important;
            }
        }
    `}

    &:after {
        position: absolute;
        bottom: -20%;
        left: 40%;
        width: 20%;
        padding-top: 20%;
        opacity: 0;
        background: #3d9d431a;
        border-radius: 50%;
        transition: all ease-in-out .4s;
        z-index: 3;
        content: '';
    }
`

export const CardContainer = styled.div`
    position: relative;
    padding: 0.7rem;
    background: #fff;
    transition: all ease-in-out .4s;
    cursor: pointer;

    &:hover {
        
        ${Payload} {
            border: 1px solid #3d9d43;
            :after {
                transform: scale(10);
                opacity: 1;
            }
        }
    }
`

export const CardName = styled.h4`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const CardCategory = styled.small`
    color: #B8B8BF;
`
