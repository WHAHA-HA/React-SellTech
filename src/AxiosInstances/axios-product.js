import axios from 'axios';

const instance = axios.create({
    baseURL: "https://shopify-2f2b5-default-rtdb.firebaseio.com",
})

export default instance;