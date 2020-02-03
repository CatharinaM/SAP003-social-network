import Input from '../components/input.js';
import Button from '../components/button.js';


function subimitRegister() {

  let collection = localStorage.getItem('colecaoDeUsuarios');

  collection = JSON.parse(collection);

  if (!Array.isArray(collection)) {
    collection = [];
  }

  const newUser = {
    nome: document.querySelector('.js-nomeCadastro-input').value,
    sobrenome: document.querySelector('.js-sobrenomeCadastro-input').value,
    email: document.querySelector('.js-emailCadastro-input').value,
    password: document.querySelector('.js-novaSenhaCadastro-input').value,
    post: [],
    id: collection.length
  };

  collection.push(newUser);
  localStorage.setItem('colecaoDeUsuarios', JSON.stringify(collection));
  localStorage.setItem('usuarioLogado', JSON.stringify(newUser.id));

  window.location.hash = '#login';
}

function register() {
  const template = `
   <div class="container-register">
    <h1 class="title-register">Cadastre-se:</h1>
     <form class="register"> 
     ${Input({
       class: 'js-nomeCadastro-input',
       placeholder: 'Nome',
       type: 'text',
     })}
     ${Input({
       class: 'js-sobrenomeCadastro-input',
       placeholder: 'Sobrenome',
       type: 'text',
     })} 
     ${Input({
       class: 'js-emailCadastro-input',
       placeholder: 'Email',
       type: 'text',
     })}
     ${Input({
       class: 'js-novaSenhaCadastro-input',
       placeholder: 'Nova senha',
       type: 'password',
     })} 
    <div class='js-btn-register'>
     ${Button({
       id: 'botãoCadastro',
       title: 'Cadastrar',
       onClick: subimitRegister,
     })}
    </div>
     </form> 
     <p class= "message-register">Já tem conta? <a href="#login">Entrar</a> </p>
   </div>
    `;

  return template;
}

export default register;
