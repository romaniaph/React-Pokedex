import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const Global = createGlobalStyle`
    li {
        height: 5vh;
        background-color: #b4acbd;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        margin: 2px;
        width: 100%;
        font-size: 2vh;
    }

    p {
        font-size: 2vh;
    }

    h2, h3 {
        font-size: 3vh;
    }

    ul {
        list-style: none;
        width: 100%;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, 9vw);
        padding: 3%;
        grid-gap: 1vh;

        
        @media only screen and (max-width: 600px) {
            grid-template-columns: 100%;
        }
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 10%;

    
    @media only screen and (max-width: 600px) {
        padding: 0 1%;
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

    @media only screen and (max-width: 600px) {
        padding: 5%;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Images = styled.span`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: auto;
    padding: 1%;

    img {
        background-color: white;
        border-radius: 50%;
        margin: 0 1%;
        height: 20vh;
    }
`;

export const Stats = styled.span`
    background-color: white;
    border-radius: 3px;
    margin: 1% 5%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    
    span {
        width: 100%;
        padding: 0 5%;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        padding: 10% 0;
    }
`;

export const Games = styled.span`
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 1%;
    border-radius: 3px;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Moves = styled.span`
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 1%;
    padding: 3%;
    border-radius: 3px;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Buttons = styled.div`
    width: 100%;
    margin: 3% 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
        background-color: #003A70;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column
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
`;