import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://react-pokedex-romaniaph.herokuapp.com'
})

export default api;