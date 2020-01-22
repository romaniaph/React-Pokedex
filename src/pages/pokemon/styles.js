import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const Global = createGlobalStyle`
    li {
        min-height: 28px;
        background-color: #b4acbd;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        margin: 2px;
        min-width: 60%;
        max-width: auto;
        font-size: 15px
    }

    p {
        font-size: 16px;
    }

    ul {
        list-style: none;
        width: 100%;
        display: grid;
        align-items: flex-start;
        grid-template-columns: repeat(auto-fill, minmax(150px, auto));
        padding: 3%;
        gap: 3px
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 1%;
    padding-left: 10%;
    padding-right: 10%;

    @media only screen and (max-width: 600px) {
        padding-left: 2%;
        padding-right: 2%;
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

export const Images = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: auto;
    height: 100%;
    padding: 1%;

    img {
        background-color: white;
        border-radius: 100px;
        margin: 1%;
        max-height: 96px
    }
`;

export const Stats = styled.span`
    background-color: white;
    border-radius: 3px;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 1%;
    padding: 2%;
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 600px) {
        font-size: 12px;
        flex-direction: column;
        margin-top: 2%;
        max-width: 100%;
    
        span {
            margin-top: 2%;
            margin-bottom: 2%;
            padding: 5%;
            max-width: 100%;
        }
}
`;

export const Games = styled.span`
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 1%;
    border-radius: 3px;
    padding: 3%;

    @media screen and (max-width: 600px) {
        padding: 5%;
    }

`;

export const Moves = styled.span`
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 1%;
    padding: 3%;
    border-radius: 3px;
    padding: 5%;

    @media screen and (max-width: 600px) {
        padding: 5%;
    }
`;

export const Buttons = styled.span`
    background-color: none;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
        text-decoration: none;
        background-color: #003A70;
        width: 20%;
        border-radius: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        align-items: flex;
        flex-direction: column;
    }
`;

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