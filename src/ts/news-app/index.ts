import '../../sass/news-app.scss'
import axios from 'axios';

interface ResponseNews  {
    urlToImage: string;
    title: string;
    url: string;
    description:string
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
    
    const newsBox = document.querySelector('.news__card')
    let fragment = '';

    news.forEach(element => {
      console.log()
      const el = newsTemplate(element);
    fragment += el;
  })
      newsBox.insertAdjacentHTML('afterbegin', fragment);
}

function newsTemplate({ urlToImage, title, url, description }:ResponseNews): string {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}