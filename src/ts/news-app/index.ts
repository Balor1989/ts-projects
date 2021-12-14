import '../../sass/news-app.scss'
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { ResponseNews } from './interfaces/ResponseNews';


const url: string = 'https://newsapi.org/v2/';
const API_KEY: string = 'adccc341e74c4606857be1b9da45eafd';
const form: HTMLBodyElement = document.querySelector('.card-section__card-form');
const countrySelect: HTMLInputElement = document.querySelector('.card-section__select-country');
const searchInput: HTMLInputElement = document.querySelector('.card-section__input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadNews();

})

function loadNews() {
    const country = countrySelect.value;
    const search = searchInput.value;
    if (!searchInput.value) {
        fetchNewsbyCountry(country);
    };
    if (searchInput.value) {
        fetchNewsbySearch(search);
    };
        
    console.log(country, search);
};


function fetchNewsbyCountry(country: string = 'us'): void {
    Loading.dots();
    try {
        axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
            renderNewsBox(values.articles)
        })
    }
    
    catch { console.error() }
    Loading.remove();
    
} 
function fetchNewsbySearch(search: string): void {
    Loading.dots();
    try {
        axios.get(`${url}top-headlines?q=${search}&apiKey=${API_KEY}`).then(response => {
            const values = response.data;
            console.log(values.articles)
            renderNewsBox(values.articles)
        })
    }
    catch { console.error() }
    Loading.remove();
}

fetchNewsbyCountry()

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
          <h2 class="news__card-title">${title || ''}</h2>
          <img src="${urlToImage}" alt="${source.name}">
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