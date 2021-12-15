import { ResponseAll } from "./interfaces/ResponseAll";
import { renderNewsBox } from "./renderNewBox";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function convertInformation(response: ResponseAll) {
    if (!response.totalResults) {
        Notify.failure('no news')
        renderNewsBox(response.articles);
        return  
    }
    Notify.info(`${response.totalResults} news items were found for your request`);
renderNewsBox(response.articles);
}