import { ResponseNews } from "./interfaces/ResponseNews";
import { newsTemplate } from "./newsTemplate";

export function renderNewsBox(news: Array<ResponseNews>): void {
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

function clearCardList(box: HTMLBodyElement) {
    box.innerHTML= ''
}