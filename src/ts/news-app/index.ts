import '../../sass/news-app.scss'
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { ResponseNews } from './interfaces/ResponseNews';
import { ResponseAll } from './interfaces/ResponseAll';


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
    if (!search) {
        fetchNewsbyCountry(country);
    };
    if (search) {
        fetchNewsbySearch(search);
        searchInput.value = '';
    };
};


function fetchNewsbyCountry(country: string = 'us'): void {
    Loading.dots();
    axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
        const values = response.data;
       convertInformation(values)
    }).catch(function (error) {
        console.log(error);
    });
    Loading.remove();
};
    
function convertInformation(response:ResponseAll) {
    if (!response.totalResults) {
        Notify.failure('no news')
        renderNewsBox(response.articles);
        return  
    }
    Notify.info(`${response.totalResults} news items were found for your request`);
renderNewsBox(response.articles);
}

function fetchNewsbySearch(search: string): void {
    Loading.dots();
    axios.get(`${url}everything?q=${search}&apiKey=${API_KEY}`).then(response => {
        const values = response.data
             convertInformation(values)
    }).catch(function (error) {
        console.log(error);
    })
    Loading.remove();
};

fetchNewsbyCountry()

function renderNewsBox(news: Array<ResponseNews>): void {
    const newsBox: HTMLBodyElement = document.querySelector('.news__card-list');
    if (newsBox.children.length) {
        clearCardList(newsBox)
    }
    let fragment = '';

    news.forEach(element => {
      const el = newsTemplate(element);
    fragment += el;
  })
      newsBox.insertAdjacentHTML('afterbegin', fragment);
}

function newsTemplate({ urlToImage, title, url, description, source }: ResponseNews): string {     
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

function clearCardList(box: HTMLBodyElement) {
    box.innerHTML= ''
}