import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css'
import { Link } from 'react-router-dom';
import notfoundgif from './404.gif'

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
                });
        }

        fetchData();
    }, [props]);

    if (pokemon === null) {
        return <div id='content'>
            <Link to='/' id='button'>Return</Link>
            <div id="pokemon-info">
                <span id='title'>
                    <h1>Pokémon not found.</h1>
                    <p>Please, return and try again.</p>
                </span>
                <span id='notfound'>
                    <img src={notfoundgif} alt={notfoundgif} />
                </span>
            </div>
        </div>
    }

    if (pokemon) {
        return <div id='content'>
            <Link to='/' id='button'>Return</Link>
            <div id="pokemon-info">
                <span id='title'>
                    <h1>#{pokemon.id} {pokemon.name}</h1>
                    <ul>
                        {pokemon.types.map(response => (
                            <li key={response.type}>{response.type}</li>
                        ))}
                    </ul>
                </span>

                <span id='images'>
                    <img src={pokemon.image} alt={pokemon.image} />
                    <img src={pokemon.imageshiny} alt={pokemon.imageshiny} />
                </span>

                <span id='stats'>
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
                </span>
                <span id='games'>
                    <h2>Games:</h2>
                    <ul>
                        {pokemon.games.map(response => (
                            <li key={response.game}>{response.game}</li>
                        ))}
                    </ul>
                </span>
                <span id='moves'>
                    <h2>Moves:</h2>
                    <ul>
                        {pokemon.moves.map(response => (
                            <li key={response.move}>{response.move}</li>
                        ))}
                    </ul>
                </span>
                <span id='buttons'>
                    <Link id='button' to={() => {
                        if (pokemon.id !== 1)
                            return (`/pokemon/${pokemon.id - 1}`)
                    }}>Previous</Link>
                    <Link id='button' to={`/pokemon/${pokemon.id + 1}`}>Next</Link>
                </span>
            </div>
        </div>
    }
}