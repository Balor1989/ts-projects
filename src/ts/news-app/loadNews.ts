import { fetchNewsByCountry, fetchNewsBySearch } from "./fetchNewsBy";

const countrySelect: HTMLInputElement = document.querySelector('.card-section__select-country');
const searchInput: HTMLInputElement = document.querySelector('.card-section__input');

export function loadNews() {
    const country = countrySelect.value;
    const search = searchInput.value;
    if (!search) {
        fetchNewsByCountry(country);
    };
    if (search) {
        fetchNewsBySearch(search);
        searchInput.value = '';
    };
};