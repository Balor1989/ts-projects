import '../../sass/news-app.scss'
import axios from 'axios';


function fetchNews(country: string = 'ua', search: string = 'health') {
    const url: string = 'https://newsapi.org/v2/';
    const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';
        
    axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
            console.log(values.articles)
    })
    axios.get(`${url}top-headlines?q=${search}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
            console.log(values.articles)
    })
}
fetchNews()

function renderNewsBox(news) {
    const newsBox = document.querySelector('.news__card')
    news.forEach(element => {
        const elementOfNews = newsTemplate(element)
    });
}

function newsTemplate(element) {
console.log(element)
}
