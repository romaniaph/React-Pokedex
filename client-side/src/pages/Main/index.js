import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import ReactLoading from 'react-loading';
import { InputText, Form, Btn, SearchBtn, PokemonList, PokemonLi, Loading, Container } from './styles';

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

    return <Container>
        <Form onSubmit={(event) => HandleSubmit(event)}>
            <InputText type="text" value={value} onChange={(event) => HandleChange(event)} placeholder='ID or name' />
            <SearchBtn type="submit" value="Search" id="SearchBtn" />
        </Form>

        {
            !done
                ?
                <Loading>
                    <span>
                        <ReactLoading className='animation' height={'100%'} width={'100%'} type='bubbles' color={'#d53141'} />
                    </span>
                </Loading>
                :
                <PokemonList>
                    {
                        pokemons.map(pokemon => (
                            <PokemonLi key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                                <span><h3>#{pokemon.id} {pokemon.name.toUpperCase()}</h3></span>
                                <img src={pokemon.image} alt={pokemon.name} />
                            </PokemonLi>
                        ))}
                </PokemonList>
        }


        <Btn onClick={() => backPokemons()}>Previous</Btn>
        <Btn onClick={() => nextPokemons()}>Next</Btn>

    </Container>
}
