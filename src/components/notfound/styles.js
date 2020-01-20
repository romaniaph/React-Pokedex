import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    text-decoration: none;
    background-color: #003A70;
    width: 15%;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    border: none;
    cursor: pointer;

    :hover {
        opacity: 0.9;
    }

    @media screen and (max-width: 600px) {
        min-width: 100%;
        margin-bottom: 1%;
    }
`;

export const NotFound = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 600px) {
        img {
            width: 100%;
        }
    }
`;

export const PokemonInfo = styled.div`
    background-color: #d53141;
    height: auto;
    width: 100%;
    border-radius: 5px;
    display: grid;
    grid-auto-rows: minmax(100px, auto);
`;

export const Title = styled.span`
    background-color: white;
    border-radius: 5px;
    font-size: 13px;
    min-height: 100px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 2%;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 18px;
            max-width: 100%;
        }
    }
`;