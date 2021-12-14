import '../../sass/news-app.scss'
import axios from 'axios';
 
const url: string = 'https://newsapi.org/v2/';
const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';

function fetchNewsbyCountry(country: string = 'ua'):void {
    axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
            console.log(values.articles)
    })
} 
function fetchNewsbySearch(search: string):void {
    axios.get(`${url}top-headlines?q=${search}&apiKey=${API_KEY}`).then(response => {
        const values = response.data;
        console.log(values.articles)
    })
}
fetchNewsbyCountry('ua')
function renderNewsBox(news) {
    const newsBox = document.querySelector('.news__card')
    news.forEach(element => {
    });
}
