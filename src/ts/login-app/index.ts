import '../../sass/login-app.scss'
import { validate } from './validate';
import 'bootstrap/dist/css/bootstrap.css';

const formEl: HTMLFormElement = document.querySelector('.form-section__login-form');
const inputEmail: HTMLInputElement = document.querySelector('.form-section__input-email');
const inputPassword: HTMLInputElement = document.querySelector('.form-section__input-password');

console.log(formEl, inputPassword, inputEmail);

const input = [inputEmail, inputPassword]

formEl.addEventListener('submit', event => {
    event.preventDefault()
    onSubmit()
})

function onSubmit() {
    const isFormValid = input.some((input => {
        let isValidInput = validate(input)
        if (!isValidInput) {
            showInputError(input)
        }
    }))
    return isFormValid
}

function showInputError(element) {
    const parent = element.parentElement;
    const message = element.dataset.message || 'Invalid input';
    const template = inputErrorTpl(message)
    element.classList.add('is-invalid')
    parent.insertAdjacentHTML('beforeend', template)
}


function inputErrorTpl(message) {
    return `
    <div class="invalid-feedback">${message}</div>
    `
}