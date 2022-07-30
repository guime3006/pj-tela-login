let email = "joao@gmail.com";

email = "guime@outlook.com"

console.log(email);

console.log(`O seu novo email é ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('usuario foi logado!!!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('o mouse está sobre o formulario');
});


document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('o mouse deixou o formulario');
});


document.querySelector('#form-login').addEventListener('submit', e =>{
    
    e.preventDefault();

    let email_user = document.querySelector('#email').value;

    let senha_user = document.querySelector('#password').value;

    console.log(email_user, senha_user);

    let json = {
        email_user,
        senha_user
    }

    if (!json.email_user) {
        console.error('foi preenchido')
    }

});

