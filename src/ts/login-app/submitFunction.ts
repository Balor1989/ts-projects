import { showInputError } from "./showInputErrors";
import { validate } from "./validate";

const inputEmail: HTMLInputElement = document.querySelector('.form-section__input-email');
const inputPassword: HTMLInputElement = document.querySelector('.form-section__input-password');

export const inputs = [inputEmail, inputPassword];

export function onSubmit(): boolean {
    const isFormValid: boolean = inputs.some((input => {
        let isValidInput = validate(input)
        if (!isValidInput) {
            showInputError(input)
        }
    }))
    return isFormValid
}