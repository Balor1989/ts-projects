import { showInputError } from "./showInputErrors";
import { validate } from "./validate";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEmail: HTMLInputElement = document.querySelector('.form-section__input-email');
const inputPassword: HTMLInputElement = document.querySelector('.form-section__input-password');

export const inputs = [inputEmail, inputPassword];

export async function onSubmit() {
    const isFormValid = inputs.every((input => {
        const isValidInput = validate(input)
        if (!isValidInput) {
            showInputError(input)
            Notify.warning('Incorrect input');
            return false
        }
        if (isValidInput) {
            return true
        }
    }))
    if (isFormValid) {
       Notify.success('Correct!');
       }
    return isFormValid
}