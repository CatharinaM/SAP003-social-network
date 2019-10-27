import Button from '../components/button.js';
import Input from '../components/input.js';

window.validarLogin = (colecao, usuario) => {
  for (let i = 0; i < colecao.length; i += 1) {
    if (usuario.emailDoCadastro === colecao[i].email
      && usuario.passwordDoCadastro === colecao[i].password) {
      return colecao[i].id;
    }
  }
  return false;
};

function enviarLogin() {
  const usuario = {
    emailDoCadastro: document.querySelector('.js-email-input').value,
    passwordDoCadastro: document.querySelector('.js-password-input').value,
  };

  const colecao = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  if (usuario.emailDoCadastro && usuario.passwordDoCadastro) {

    if (window.validarLogin(colecao, usuario)) {
      const id = window.validarLogin(colecao, usuario)
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
  <h1 class= "título-login">Escamb</h1>
  <h2 class= "titulo-descricao"> Sua rede de trocas de objetos e experiências </h2>
  <h3 class= "titulo-descricao"> Bem-vindo(a)!</h3>
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

  <div class='js-botao-login'>
   ${Button({
    id: 'Botão',
    // class:'js-botao-login',
    title: 'Enviar',
    onClick: enviarLogin,
  })}
   </div>
  </div>

    </form>
    <p class= "titulo-descricao"">Não tem conta? <a href="#cadastro">Cadastre-se</a> </p>
    </div>
    </div>

  `;

  return template;
}

export default Login;
