import styled from 'styled-components';

export const MainFooter = styled.footer`
    background-color: #003A70;
    
    height: 7vh;
    width: 100%;
    font-family: 'Roboto';

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2vh;
    position: relative;
    bottom: 0;

    a {
        color: white;
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 600px) {
        height: 8vh;
        font-size: 90%;
    }
`;