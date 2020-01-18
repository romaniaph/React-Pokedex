import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'

const animation = keyframes`
    50% {
        background-color: white;
    }`

export const PokemonList = styled.ul`
    margin: 20px;
    padding-left:0 ;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    grid-gap: 20px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) { 
        margin: 5px;
        list-style: none;
        display: grid;
        grid-template-columns: 100%;
    }

    span {
        text-align: center;
        background-color: white;
        border-radius: 5px;
        font-size: 10px;
        height: 100%;
        justify-content: center;
        padding: 10%;
        align-items: center;
        font-family: 'Roboto';

        @media screen and (max-width: 600px){
            padding: 5%;
        }
}
`;

export const PokemonLi = styled(Link)`
    color: black;
    min-width: 150px;
    max-height: 200px;
    background-color: #d53141;
    border-radius: 4px;
    display: grid;
    align-items: center;
    justify-content: stretch;
    cursor: pointer;
    text-decoration: none;

    :hover {
        animation: ${animation} 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    img {
        background-color: white;
        border-radius: 50px;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1%;
`;

export const InputText = styled.input`
    width: 50%;
    padding: 5px;
    border-radius: 2px;
    font-family: 'Roboto';
    font-size: 17px;
`;

export const Btn = styled.button`
    margin: 20px;
    width: 20%;
    height: 70px;
    background-color: #d53141;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 3px;

    :hover {
        opacity: 0.8;
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        border-radius: 2px;
        font-size: 15px;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        padding: 5%;
        min-width: 80%;
    }
`;

export const SearchBtn = styled.input`
    margin: 20px;
    min-width: 10%;
    height: 30px;
    background-color: #d53141;
    color: white;
    font-family: 'Roboto';
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 3px;

    :hover {
        opacity: 0.9;
    }

    @media only screen and (max-width: 600px) {
        min-width: 25%;
    }

`;

export const Loading = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 30%;
        height: auto;
    }
`;

export const Container = styled.div`
    padding: 2%;
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;
