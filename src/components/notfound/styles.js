import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 1%;
    padding-left: 10%;
    padding-right: 10%;

    @media only screen and (max-width: 600px) {
        padding-left: 2%;
        padding-right: 2%;
    }
`;

export const NotFound = styled.span`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        img {
            width: 100%;
            height: 90vh;
            object-fit: cover;
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