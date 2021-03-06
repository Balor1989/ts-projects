import { ResponseAll } from "./interfaces/ResponseAll";
import { renderNewsBox } from "./renderNewBox";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function convertInformation(response: ResponseAll):void {
    if (!response.totalResults) {
        Notify.failure('no news')
        renderNewsBox(response.articles);
        return  
    }
renderNewsBox(response.articles);
}