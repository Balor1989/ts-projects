import { ResponseNews } from "./interfaces/ResponseNews";

export function newsTemplate({ urlToImage, title, url, description, source }: ResponseNews): string {  
    return `
      <div class="news__card">
        <div class="news__card-image">
          <h2 class="news__card-title">${title || ''}</h2>
          <img src="${urlToImage}" alt="${source.name}">
        </div>
        <div class="news__card-content">
          <p>${description || ''}</p>
        </div>
        <div class="news__card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
  `;
    
}