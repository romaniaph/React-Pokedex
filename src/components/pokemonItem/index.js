import React from 'react';

import { Container, Title, Image } from './styles';
import { Link } from 'react-router-dom';

function PokemonItem({ pokemon }) {
    return (
        <Container>
            <Link to={`/pokemon/${pokemon.id}`}>
                <Title>
                    <h2>{`#${pokemon.id} ${pokemon.name.toUpperCase()}`}</h2>
                </Title>
                <Image>
                    <img src={pokemon.image} alt={pokemon.name} />
                </Image>
            </Link>
        </Container>
    );
}

export default PokemonItem;