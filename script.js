let form = document.getElementById('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btnSubmit = document.querySelector('.submit');
let btnGoogle = document.querySelector('.google');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    createAccount()
});

function createAccount() {
    let emailValue = email.value;
    let passwordValue = password.value;

    if (emailValue === '') {
        setErrorFor(email, 'User email is required');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Please enter a valid email');
    } else {

    }
    if (passwordValue === '') {
        setErrorFor(email, 'User password is required');
    } else if (passwordValue.length < 7) {
        setErrorFor(email, 'Password needs 7 characters');
    } else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
    let classControl = input.parentElement;
    let small = classControl.querySelector('small');

    //Adicionar a menssagem de erro
    small.innerHTML = message;

    //Adicionando a class erro
    small.className = 'classControl error';
}

function setSuccessFor(input) {
    let classControl = input.parentElement;

    //Adicionando a class success
    classControl.className = 'classControl success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

