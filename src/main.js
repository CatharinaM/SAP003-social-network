import Login from './pages/login.js';
import Register from './pages/register.js';
import Home from './pages/home.js';

let ultimaPagina = '';

function chancesPages() {
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const database = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));

  switch (window.location.hash) {
    case '#cadastro':
      if (ultimaPagina !== 'cadastro') {
        document.querySelector('main').innerHTML = Register();
        ultimaPagina = 'cadastro';
      }
      break;

    case '#home':
      if (ultimaPagina !== 'home') {
        document.querySelector('main').innerHTML = Home();
        ultimaPagina = 'home';
        window.home.printPosts(database[id].post);
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
  window.addEventListener('hashchange', chancesPages);
  chancesPages();
}

window.addEventListener('load', init);
