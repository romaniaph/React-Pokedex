import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Button, PokemonInfo, Title, Images, Stats, Games, Moves, Buttons, Global } from './styles'
import NotFound from '../../components/notfound';
export default function Pokemon(props) {

    const [pokemon, setPokemon] = useState({
        types: [],
        abilities: [],
        games: [],
        moves: []
    })

    useEffect(() => {
        const { id } = props.match.params;

        async function fetchData() {
            await api.get(`/pokemon/${id}`)
                .then((response) => {
                    setPokemon(
                        response.data
                    );
                })
                .catch(() => {
                    setPokemon(null);
                });
        }
        window.scrollTo(0, 0);
        fetchData();
        console.log(pokemon.games);
    }, [props]);

    return <Container>
        <Global></Global>
        {
            !pokemon
                ?
                <>
                    <NotFound />
                </>
                :
                <>
                    <Button to={process.env.PUBLIC_URL + '/'}>Return</Button>
                    <PokemonInfo>
                        <Title>
                            <h1>#{pokemon.id} {pokemon.name}</h1>
                            <ul>
                                {pokemon.types.map(response => (
                                    <li key={response.type}>{response.type}</li>
                                ))}
                            </ul>
                        </Title>

                        <Images>
                            <img src={pokemon.image} alt={pokemon.image} />
                            <img src={pokemon.imageshiny} alt={pokemon.imageshiny} />
                        </Images>

                        <Stats>
                            <span>
                                <h2>Abilities:</h2>
                                <ul>
                                    {pokemon.abilities.map(response => (
                                        <li key={response.ability}>{response.ability}</li>
                                    ))}
                                </ul>
                            </span>
                            <span>
                                <h2>Characteristics:</h2>
                                <p>Height: {pokemon.height}dm</p>
                                <p>Weight: {pokemon.weight}hg</p>
                            </span>
                        </Stats>

                        <Games>
                            <h2>Games:</h2>
                            {
                                pokemon.games.length === 0
                                    ?
                                    <p>No games to show</p>
                                    :
                                    <ul>
                                        {pokemon.games.map(response => (
                                            <li key={response.game}>{response.game}</li>
                                        ))}
                                    </ul>
                            }
                        </Games>

                        <Moves>
                            <h2>Moves:</h2>
                            {
                                pokemon.moves.lenght === 0
                                    ?
                                    <p>No moves to show</p>
                                    :
                                    <ul>
                                        {pokemon.moves.map(response => (
                                            <li key={response.move}>{response.move}</li>
                                        ))}
                                    </ul>
                            }
                        </Moves>
                        <Buttons>
                            <Button to={() => {
                                if (pokemon.id !== 1)
                                    return (process.env.PUBLIC_URL + `/pokemon/${pokemon.id - 1}`)
                            }}>Previous</Button>
                            <Button to={process.env.PUBLIC_URL + `/pokemon/${pokemon.id + 1}`}>Next</Button>
                        </Buttons>
                    </PokemonInfo>
                </>
        }
    </Container>
}

