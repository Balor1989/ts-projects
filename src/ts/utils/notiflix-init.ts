import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function notiflixSettings():void {
    Notify.init({
        width: '350px',
        fontSize: '21px',
        position: 'right-top',
        distance: '25px',
        opacity: 0.8,
        clickToClose: true,
    });
}