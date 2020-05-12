import styled from 'styled-components';

export const Button = styled.button`
    height: 8vh;
    width: 20%;
    
    color: white;
    font-size: 2.5vh;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #d53141;
    border-radius: 4px;

    border: none;

    transition: 0.3s;
    cursor: pointer;
    
    :hover {
        opacity: 0.8;
    }

    a {
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: white;
    }

    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 2% 0;
    }
`; 
