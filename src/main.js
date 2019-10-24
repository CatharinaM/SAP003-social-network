import Login from './pages/login.js';
import Cadastro from './pages/cadastro.js';
import Home from './pages/home.js';
import Perfil from  './pages/perfil.js';

let ultimaPagina = '';

function trocaPagina() {
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const bancoDeDados = JSON.parse(localStorage.getItem('colecaoDeUsuarios')); 

  switch (window.location.hash) {
    case '#cadastro':
      if (ultimaPagina !== 'cadastro') {
        document.querySelector('main').innerHTML = Cadastro();
        ultimaPagina = 'cadastro';
      }
      break;


    case '#home':
      if (ultimaPagina !== 'home') {
        document.querySelector('main').innerHTML = Home();
        ultimaPagina = 'home';
        window.home.imprimirPosts(bancoDeDados[id].post);
      }
      break;
    
    case '#perfil':
      if (ultimaPagina !== 'perfil') {
        document.querySelector('main').innerHTML = Perfil();
        ultimaPagina = 'perfil';
      }
      break;
    

    default:
      if (ultimaPagina !== 'login') {
        document.querySelector('main').innerHTML = Login();
        ultimaPagina = 'login';
      }
      break;
  }
}

function init() {
  window.addEventListener('hashchange', trocaPagina);
  trocaPagina();
}

window.addEventListener('load', init);
