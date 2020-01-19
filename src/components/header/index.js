import React from 'react';
import { MainHeader } from './styles'
import './styles.css'
import { Global } from '../../pages/pokemon/styles';

const Header = () => (
    <>
    <Global></Global>
    <MainHeader id="main-header"><h1>React Pokedex</h1></MainHeader>
    </>
);

export default Header;