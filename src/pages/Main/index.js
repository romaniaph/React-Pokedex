import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import api from '../../services/api'
import PokemonItem from '../../components/pokemonItem'
import { Button } from '../globalStyle'
import { InputText, Form, Buttons, SearchBtn, PokemonList, Loading, Container } from './styles';

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
        window.scrollTo(0, 0);
    }


    function backPokemons() {
        const offset = pokemons[0].id;

        if (offset - 20 < 1)
            getPokemons(1);
        else {
            getPokemons(offset - 20);
            setDone(false);
            window.scrollTo(0, 0);
        }
    }

    function HandleSubmit(event) {
        event.preventDefault();

        if (value.trim())
            props.history.push(process.env.PUBLIC_URL + `/pokemon/${value}`);
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
                            <PokemonItem pokemon={pokemon} key={pokemon.id} />
                        ))}
                </PokemonList>
        }

        <Buttons>
            <Button onClick={() => backPokemons()}>Previous</Button>
            <Button onClick={() => nextPokemons()}>Next</Button>
        </Buttons>
    </Container>
}
