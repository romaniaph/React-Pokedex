import React from 'react'; //importa o react
import Header from './components/header' //importa o cabeçalho
import Footer from './components/footer'
import Routes from './routes';
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;