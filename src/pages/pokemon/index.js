import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, PokemonInfo, Title, Images, Stats, Games, Moves, Buttons, Global } from './styles'
import { Button } from '../globalStyle'
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

    return (
        <Container>
            <Global />
            {
                !pokemon
                    ?
                    <>
                        <NotFound />
                    </>
                    :
                    <>
                        <Button>
                            <Link to={process.env.PUBLIC_URL + '/'}>
                                Return
                            </Link>
                        </Button>
                        <PokemonInfo>
                            <Title>
                                <h2>#{pokemon.id} {pokemon.name}</h2>
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
                                    <h3>Abilities:</h3>
                                    <ul>
                                        {pokemon.abilities.map(response => (
                                            <li key={response.ability}>{response.ability}</li>
                                        ))}
                                    </ul>
                                </span>
                                <span>
                                    <h3>Characteristics:</h3>
                                    <p>Height: {pokemon.height}dm</p>
                                    <p>Weight: {pokemon.weight}hg</p>
                                </span>
                            </Stats>

                            <Games>
                                <h3>Games:</h3>
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
                                <h3>Moves:</h3>
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
                                <Button>
                                    <Link to={() => {
                                        if (pokemon.id !== 1)
                                            return (process.env.PUBLIC_URL + `/pokemon/${pokemon.id - 1}`)
                                    }}>Previous</Link>
                                </Button>

                                <Button>
                                    <Link to={process.env.PUBLIC_URL + `/pokemon/${pokemon.id + 1}`}>Next</Link>
                                </Button>

                            </Buttons>
                        </PokemonInfo>
                    </>
            }
        </Container>)
}

