import "@fontsource/roboto"
import "@fontsource/readex-pro"
import '../../sass/news-app.scss'
import { loadNews } from './loadNews';
import { notiflixSettings } from '../utils/notiflix-init'
import { backToTop } from '../utils/backToTop'
import { fetchNewsByCountry} from "./fetchNewsBy";

// fetchNewsByCountry('ua')
const form: HTMLBodyElement = document.querySelector('.card-section__card-form');

backToTop();
notiflixSettings();


form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadNews();
})

