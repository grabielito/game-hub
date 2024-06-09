import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7004b8d234c24de684a6ab69b134e884'
    }
})