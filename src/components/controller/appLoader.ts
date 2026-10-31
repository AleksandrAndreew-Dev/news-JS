import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        const baseUrl = isLocalhost ? (process.env.API_URL as string) : 'https://rss-news-api.onrender.com/';
        super(baseUrl, {
            apiKey: process.env.API_KEY as string,
        });
    }
}

export default AppLoader;
