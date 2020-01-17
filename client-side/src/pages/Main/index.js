import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import img from './404.gif'
import ReactLoading from 'react-loading';

export default function App(props) {

    const [pokemons, setPokemons] = useState([]);
    const [value, setValue] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        getPokemons();
    }, []);

    async function getPokemons(offset = 1) {
        const result = await api.get(`/${offset}`);
        await setPokemons(result.data);
        await setDone(true);
    }

    function nextPokemons() {
        const offset = pokemons[pokemons.length - 1].id;
        setDone(false);
        getPokemons(offset);
    }


    function backPokemons() {
        const offset = pokemons[0].id;

        if (offset - 20 < 1)
            getPokemons(1);
        else {
            getPokemons(offset - 20);
            setDone(false);
        }

    }

    function HandleSubmit(event) {
        event.preventDefault();

        if (value.trim())
            props.history.push(`/pokemon/${value}`);
    }

    function HandleChange(event) {
        setValue(event.target.value)
    }

    return <div>
        <form onSubmit={(event) => HandleSubmit(event)}>
            <input type="text" id="search" value={value} onChange={(event) => HandleChange(event)} placeholder='ID or name' />
            <input type="submit" value="Search" id="SearchBtn" />
        </form>

        {
            !done
                ?
                <span id='loading'>
                    <span>
                        <ReactLoading className='animation' height={'100%'} width={'100%'} type='bubbles' color={'#d53141'} />
                    </span>
                </span>
                :
                <ul id="pokemon-list">
                    {
                        pokemons.map(pokemon => (
                            <Link key={pokemon.id} id="pokemon-li" to={`/pokemon/${pokemon.id}`}>
                                <span><h3>#{pokemon.id} {pokemon.name.toUpperCase()}</h3></span>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </Link>
                        ))}
                </ul>
        }


        <button id="showMore" onClick={() => backPokemons()}>Previous</button>
        <button id="showMore" onClick={() => nextPokemons()}>Next</button>

    </div>
}
