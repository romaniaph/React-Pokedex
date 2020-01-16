import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default class App extends Component {

    state = {
        pokemons: [],
        value: "",
    }

    componentDidMount() {
        this.getPokemons();
    }

    getPokemons = async (offset = 1) => {
        const result = await api.get(`/${offset}`);
        this.setState({ pokemons: result.data });
    }

    nextPokemons = () => {
        const offset = this.state.pokemons[this.state.pokemons.length - 1].id;
        this.getPokemons(offset);
    }


    backPokemons = () => {
        const offset = this.state.pokemons[0].id;

        if (offset - 20 < 1)
            this.getPokemons(1);
        else
            this.getPokemons(offset - 20);
    }

    HandleSubmit = (event) => {
        event.preventDefault();
        const value = this.state.value;

        if (value.trim())
            this.props.history.push(`/pokemon/${value}`);
    }

    HandleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return <div>
            <form onSubmit={this.HandleSubmit}>
                <input type="text" id="search" value={this.state.value} onChange={this.HandleChange} placeholder='ID or name' />
                <input type="submit" value="Search" id="SearchBtn" />
            </form>
            <ul id="pokemon-list">
                {this.state.pokemons.map(pokemon => (
                    <Link key={pokemon.id} id="pokemon-li" to={`/pokemon/${pokemon.id}`}>
                        <span><h3>#{pokemon.id} {pokemon.name.toUpperCase()}</h3></span>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </Link>
                ))}
            </ul>
            <button id="showMore" onClick={this.backPokemons}>Previous</button>
            <button id="showMore" onClick={this.nextPokemons}>Next</button>

        </div>
    }
}