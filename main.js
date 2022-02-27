const modalWindow = document.querySelector('.loginWindow');
const userButton = document.querySelector('.modal-link');
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

function submitForm(evt){
    const loginPasRegEx = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const isLoginValid = loginInput.value.length > 3 && loginInput.value.trim() !== '';
    const isPasswordValid = loginPasRegEx.test(loginPassword.value);
    const isFormValid = isLoginValid && isPasswordValid;

    if (isFormValid) {
        loginInput.classList.remove('invalid');
        loginPassword.classList.remove('invalid');
    } else {
        evt.preventDefault();
        loginInput.classList.add('invalid');
        loginPassword.classList.add('invalid');
        errorLogin.classList.remove('hidden');
        errorPassword.classList.remove('hidden');
    }
}

modelButton.addEventListener('click', submitForm);
userButton.addEventListener('click', toggleModel);

// document.addEventListener('mousedown', function (e) {
//     isUserButton
// }

// window.addEventListener("keydown", function (e) {   
//     //закрытие окна по escape
//     if (e.which == 27 && this.isOpened) {
//         e.preventDefault();
//         this.close();
//         return;
//     }