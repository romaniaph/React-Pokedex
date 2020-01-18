import styled, {  } from 'styled-components';
import Fonte from './Pokemon-font.ttf'

export const MainHeader = styled.header`

    height: auto;
    max-height: 10%;
    width: 100%;
    font-size: 15px;
    background-color: #003A70;
    display: flex;
    font-family: Pokemon-font;
    align-items: center;
    justify-content: center;
    border-color: black;
    border-bottom: 1px solid;

    h1 {
        color: #FFCB05;
        text-shadow: 1px 1px 1px #003A70;
        text-emphasis: none;
        font-weight: 50;
    }
`;