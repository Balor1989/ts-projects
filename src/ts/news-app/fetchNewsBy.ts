import { convertInformation } from "./convertInformation";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const url: string = 'https://news-api-v2.herokuapp.com';
const API_KEY: string = 'e0798b45a1134979b576a54b7ede2b27';


export function fetchNewsByCountry(country: string = 'us'): void {
    Loading.dots();
    axios.get(`${url}top-headlines?country=${country}&apiKey=${API_KEY}`).then(response => {
        const values = response.data;
       convertInformation(values)
    }).catch(function (error) {
         Notify.failure(`${error}`)
    });
    Loading.remove();
};

export function fetchNewsBySearch(search: string): void {
    Loading.dots();
    axios.get(`${url}everything?q=${search}&apiKey=${API_KEY}`).then(response => {
        const values = response.data
             convertInformation(values)
    }).catch(function (error) {
         Notify.failure(`${error}`);
    })
    Loading.remove();
};