import styled from 'styled-components';

export const InputContainer = styled.div`
    max-width: 275px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #383450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background: transparent;
    color: #fff;
    width: 100%;
    border: 0;
    height: 30px;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 3px 0;
`