import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:3000/pokedex-api'
})

export default api;