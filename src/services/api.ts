    import axios from 'axios';

    const api = axios.create({
    baseURL: 'https://fakeapi.platzi.com',
    });

    export default api;
