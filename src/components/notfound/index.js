import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from '../../pages/globalStyle'
import { PokemonInfo, Title, NotFound, Container } from './styles';
import notfoundgif from './404.gif'

const App = () => (
    <>
        <Container>
            <Button >
                <Link to={process.env.PUBLIC_URL + '/'}>
                    Return
                </Link>
            </Button>
            <PokemonInfo>
                <Title>
                    <h1>Page not found.</h1>
                    <p>Please, return and try again.</p>
                </Title>
                <NotFound>
                    <img src={notfoundgif} alt={notfoundgif} />
                </NotFound>
            </PokemonInfo>
        </Container>
    </>
)

export default App;