import styled from 'styled-components';

export const PokemonList = styled.ul`
    padding: auto;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 12vw);
    grid-gap: 2vh;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) { 
        margin: 5px;
        list-style: none;
        display: grid;
        grid-template-columns: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const InputText = styled.input`
    width: 50%;
    padding: 0.5%;
    border-radius: 2px;
    font-family: 'Roboto';
    font-size: 2.5vh;
    border: none;
    border: 1px solid #d53141;
`;

export const Buttons = styled.div`
    width: 80%;
    margin: 5% 0;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 600px) {
        flex-direction: column
    }
`;


export const SearchBtn = styled.input`
    margin: 2%;
    min-width: 10%;
    height: 5vh;
    background-color: #d53141;
    color: white;
    font-family: 'Roboto';
    font-size: 2.5vh;
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
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;

        span {
            display: flex;
            flex-direction: column;
        }
    }
`;
