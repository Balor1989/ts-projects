import '../../sass/news-app.scss'
import axios from 'axios';

interface ResponseNews  {
    urlToImage: string;
    title: string;
    url: string;
    description: string;
    source:{ id: string, name: string }
    
}
 
const url: string = 'https://newsapi.org/v2/';
const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';

function fetchNewsbyCountry(country: string = 'ua'):void {
    axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
        console.log(values)
        renderNewsBox(values.articles)
    })
} 
function fetchNewsbySearch(search: string = 'world'):void {
    axios.get(`${url}top-headlines?q=${search}&apiKey=${API_KEY}`).then(response => {
        const values = response.data;
        console.log(values.articles)
        renderNewsBox(values.articles)
    })
}
fetchNewsbySearch('ua')


function renderNewsBox(news: Array<ResponseNews>): void {
    
    const newsBox = document.querySelector('.news__card-list')
    let fragment = '';

    news.forEach(element => {
      console.log()
      const el = newsTemplate(element);
    fragment += el;
  })
      newsBox.insertAdjacentHTML('afterbegin', fragment);
}

function newsTemplate({ urlToImage, title, url, description, source }:ResponseNews): string {
  return `
      <div class="news__card">
        <div class="news__card-image">
          <img src="${urlToImage}" alt="${source.name}">
          <h2 class="news__card-title">${title || ''}</h2>
        </div>
        <div class="news__card-content">
          <p>${description || ''}</p>
        </div>
        <div class="news__card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
  `;
}