import styled from "styled-components";

export const SlidebarContainer = styled.div`
    min-height: 3rem;
    min-width: 8rem;
    padding: 0 0.5rem;
`

export const SlidebarBoard = styled.div`
    position: relative;
    height: 10px;
    width: 100%;
    background: #3d9d43;
    border-radius: 5rem;
`

export const SlidebarTrack = styled.div<{value: number}>`
`

export const SlidebarThumb = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #3d9d43;
    border-radius: 50%;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        background: #FFFFFF;
        border-radius: 50%;
        content: '';
    }
`
