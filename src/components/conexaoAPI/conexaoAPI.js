import axios from 'axios';

const apiURL = axios.create({
    baseURL: 'https://hn.algolia.com/api/v1/search?query=',
    headers: {"Content-type": "application/json"}
});
export default apiURL;