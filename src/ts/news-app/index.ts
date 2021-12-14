import '../../sass/news-app.scss'
import axios from 'axios';

const url: string = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=';

const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';

interface ResponseValues{
    status: string;
    totalResults: number;
    articles: {};
}

axios.get(`${url}${API_KEY}`).then(response => {
    const values = response.data as ResponseValues;
    const data = values
     console.log(data)
});
