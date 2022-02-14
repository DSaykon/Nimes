const modalWindow = document.querySelector('.form');
const userButton = document.querySelector('modal-link');
const loginInput = modalWindow.querySelector('#login');
const loginPassword = modalWindow.querySelector('#password');
const modelButton = modalWindow.querySelector('.form__btn');
const errorLogin = modalWindow.querySelector('.error-login');
const errorPassword = modalWindow.querySelector('.error-password');


function toggleModel() {
    modalWindow.classList.toggle('hidden');
    loginInput.classList.remove('invalid');
    loginPassword.classList.remove('invalid');
    errorLogin.classList.add('hidden');
    errorPassword.classList.add('hidden');
    loginInput.value = '';
    loginPassword.value = '';
}