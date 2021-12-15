import '../../sass/news-app.scss'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { loadNews } from './loadNews';

Notify.init({
width: '350px',
fontSize: '21px',
position: 'right-top',
distance: '30px',
opacity: 1,
});

const form: HTMLBodyElement = document.querySelector('.card-section__card-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loadNews();
})

// fetchNewsbyCountry()