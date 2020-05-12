import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    height: 20vh;
    background-color: #d53141;
    transition: 0.5s;
    border-radius: 5px;

    :hover {
        background-color: white;
        width: 105%;
        height: 22vh;
        position: relative;
    }

    @media only screen and (max-width: 600px) {
        height: 30vh;
    }

    a {
        text-decoration: none;
        color: black;

        display: flex;
        flex-direction: column;

        height: 100%;
        width: 100%;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 7vh;

    h2 {
        font-size: 2vh;
    }

    @media only screen and (max-width: 600px) {
        height: 15vh;

        h2 {
            font-size: 3vh;
        }
    }
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        background-color: white;
        border-radius: 50%;
        height: 13.5vh;

        @media only screen and (max-width: 600px) {
            height: 20vh;
        }
    }
`;
