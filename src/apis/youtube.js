import axios from 'axios';

const KEY = 'AIzaSyDAzXCfssze1n5zEcPN2TpGwzpTs1hYWgI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})