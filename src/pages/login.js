import Button from '../components/button.js';
import Input from '../components/input.js';

window.validateLogin = (collection, user) => {
  for (let i = 0; i < collection.length; i += 1) {
    if (user.registrationEmail === collection[i].email
      && user.passwordRegister === collection[i].password) {
      return collection[i].id;
    }
  }
  return -1;

};

function subimitLongin() {
  const user = {
    registrationEmail: document.querySelector('.js-email-input').value,
    passwordRegister: document.querySelector('.js-password-input').value,
  };

  const collection = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));

  if (user.registrationEmail && user.passwordRegister) {
    if (window.validateLogin(collection, user) >= 0) {
      const id = window.validateLogin(collection, user)
      localStorage.setItem('usuarioLogado', JSON.stringify(id));
      window.location.hash = '#home';
    } else {
      window.alert('E-mail ou senha inválidos');
    }
  } else {
    window.alert('Preencha e-mail e senha');
  }

}

function Login() {
  const template = `
  
  <div class="container-login">
  <img src="maos.png" alt="">
  

  <div class="container-login2">
  <h1 class= "title-login">Escamb</h1>
  <h2 class= "title-description"> Sua rede de trocas de objetos e experiências </h2>
  <h3 class= "title-description"> Bem-vindo(a)!</h3>
  <form> 
<div class="inputs">
   ${Input({
    class: 'js-email-input',
    placeholder: 'Email',
    type: 'email',
  })}

   ${Input({
    class: 'js-password-input',
    placeholder: 'senha',
    type: 'password',
  })}

  <div class='js-btn-login'>
   ${Button({
    id: 'Botão',
    title: 'Enviar',
    onClick: subimitLongin,
  })}
   </div>
  </div>

    </form>
    <p class= "title-description"">Não tem conta? <a href="#cadastro" > Cadastre-se</a> </p>
    </div>
    </div>

  `;

  return template;
}

export default Login;
