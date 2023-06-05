import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

export const InputLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`

export const InputContent = styled.div`
    position: relative;
`

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    line-height: 3.5rem;
    min-height: 3.5rem;
    z-index: 1;
`

export const InputBoard = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #f0f0f2;
`

export const StyledInput = styled.input`
    flex: 1;
    display: block;
    min-width: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: 1.2rem;
    font-weight: 900;
`

export const StyledTextarea = styled(StyledInput)``
