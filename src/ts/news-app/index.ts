import '../../sass/news-app.scss'
import axios from 'axios';
const country: string = 'ua';
const url: string = 'https://newsapi.org/v2/';

const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';


axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
    const values = response.data;
    const data = values
     console.log(data)
});
