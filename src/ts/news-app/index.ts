import '../../sass/news-app.scss'
import { loadNews } from './loadNews';
import {notiflixSettings} from '../utils/notiflix-init'

const form: HTMLBodyElement = document.querySelector('.card-section__card-form');

notiflixSettings()
// fetchNewsbyCountry()

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadNews();
})

