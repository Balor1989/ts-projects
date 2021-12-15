import '../../sass/news-app.scss'
import { loadNews } from './loadNews';
import { notiflixSettings } from '../utils/notiflix-init'
import { backToTop } from '../utils/backToTop'


const form: HTMLBodyElement = document.querySelector('.card-section__card-form');

backToTop();
notiflixSettings();
// fetchNewsbyCountry()

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadNews();
})

