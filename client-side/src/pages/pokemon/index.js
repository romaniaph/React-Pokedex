import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'
import { Link } from 'react-router-dom';
import notfoundgif from './404.gif'

export default class Pokemon extends Component {
    state = {
        pokemon: {
            types: [],
            abilities: [],
            games: [],
            moves: []
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/pokemon/${id}`);

        this.setState({
            pokemon: response.data
        })
    }

    nextPokemon = async () => {
        const pokemon = this.state.pokemon
        const response = await api.get(`/pokemon/${pokemon.id + 1}`);
        this.setState({
            pokemon: response.data
        })
    }

    previousPokemon = async () => {
        const pokemon = this.state.pokemon
        if (pokemon.id !== 1) {
            const response = await api.get(`/pokemon/${pokemon.id - 1}`);
            this.setState({
                pokemon: response.data
            })
        }
    }


    render() {
        const pokemon = this.state.pokemon
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
                        <button id='button' onClick={this.previousPokemon}>Previous</button>
                        <button id='button' onClick={this.nextPokemon} >Next</button>
                    </span>
                </div>
            </div>
        }
    }
}