import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height:60px;
    border: ${props => props.$border ? "1px solid #CDCDCD" : "0"};
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    flex: 1;
    border-radius:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transition: all 0.2s;
    }
`