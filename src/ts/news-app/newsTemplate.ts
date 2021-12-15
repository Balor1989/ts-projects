import { ResponseNews } from "./interfaces/ResponseNews";

export function newsTemplate({ urlToImage, title, url, description, source }: ResponseNews): string {  
    return `
      <div class="news-section__card">
        <div class="news-section__image-box">
          <img class="news-section__image" src="${urlToImage}" alt="${source.name}">
        </div>
        <div class="news-section__content-box">
         <h2 class="news-section__card-title">${title || ''}</h2>
          <p class="news-section__content-description">${description || ''}</p>
        </div>
        <div class="news-section__action-box">
          <a href="${url}" class="news-section__action-link">Read more</a>
        </div>
      </div>
  `;
    
}