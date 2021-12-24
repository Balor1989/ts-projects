import { inputErrorTpl } from "./errorTemplate";

export function showInputError(element: HTMLInputElement): void {
    const parent = element.parentElement;
    const message = element.dataset.message || 'Invalid input';
    const template = inputErrorTpl(message)
    element.classList.add('is-invalid')
    parent.insertAdjacentHTML('beforeend', template)
}