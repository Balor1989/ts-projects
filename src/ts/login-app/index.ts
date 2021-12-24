import '../../sass/login-app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { removeInputError } from './removeInputError';
import { onSubmit } from './submitFunction';
import { inputs } from './submitFunction';

const formEl: HTMLFormElement = document.querySelector('.form-section__login-form');


    
formEl.addEventListener('submit', event => {
    event.preventDefault()
    onSubmit()
})
inputs.forEach(e => e.addEventListener('focus', () => removeInputError(e)))


