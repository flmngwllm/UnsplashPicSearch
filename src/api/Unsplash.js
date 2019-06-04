import axios from 'axios';

//creates an instance of axios client with default properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID d9126a95fc8e9c68c34d79693f8dab439d91bb08f38acc53a8067f14829605e3 '
}
})

