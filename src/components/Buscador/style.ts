import styled from 'styled-components';

export const ContainerBuscador = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 42px;
    padding: 0 15px;
    gap: 18px;
    border-radius: 5px;
    background-color: #e4e4e4;

    input {
        font-size: 1.5rem;
        font-weight: bold;
        width: 100%;
        outline: none;
        border: none;
        background-color: #e4e4e4;
        &::placeholder{
            color: #4c4d5e;
        }
    }
`