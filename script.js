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
        setErrorFor(email, 'Use a valid email');
    } else {
        setSuccessFor(email, 'valid email');
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password is mandatory');
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password needs 6 characters');
    } else {
        setSuccessFor(password, 'valid password');
    }

}

function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    

    //Adicionar a menssagem de erro
    small.innerText = message;

    //Adicionando a class erro
    small.className = 'formControl error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerHTML = "";
    alert('Conta criada com sucesso');

    //Adicionando a class success
    classControl.className = 'form-control classControl success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }