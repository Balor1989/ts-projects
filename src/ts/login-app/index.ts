import '../../sass/login-app.scss'
import { validate } from './validate';

const formEl: HTMLFormElement = document.querySelector('.form-section__login-form');
const inputEmail: HTMLInputElement = document.querySelector('.form-section__input-email');
const inputPassword: HTMLInputElement = document.querySelector('.form-section__input-password');

console.log(formEl, inputPassword, inputEmail);

formEl.addEventListener('submit', event => {
    event.preventDefault()
    onSubmit()
    console.log(onSubmit())
})

function onSubmit():boolean {
    const isFormValid = [inputPassword, inputEmail].every((input => {
        const isValidInput = validate(input)
        return isValidInput
    }))
    return isFormValid
}

