import styled from 'styled-components';

export const MainFooter = styled.footer`
    background-color: #003A70;
    height: 38px;
    width: 100%;
    font-family: 'Roboto';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: white;
    position: relative;
    bottom: 0;

    @media only screen and (max-width: 600px) {
        font-size: 11px;
}
`;