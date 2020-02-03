import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';

function subimitPublication() {
  const text = document.querySelector('.js-message-textarea').value;

  if (text) {
    const database = JSON.parse(localStorage.getItem('colecaoDeUsuarios'))
    const id = JSON.parse(localStorage.getItem('usuarioLogado'))
    const posts = database[id].post;

    const message = {
      postagem: document.querySelector('.js-message-textarea').value,
      likes: 0,
      privacidade: 'publico',
      id: new Date().getTime(),
      comentario: []
    }
    posts.unshift(message);

    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(database));

    home.printPosts(posts);
    document.querySelector('.js-message-textarea').value = '';
  }
}

function printPosts(posts) {
  document.querySelector('.resp').innerHTML = '';

  posts.map(elem =>
    document.querySelector('.resp').innerHTML += window.home.template(elem.postagem, elem.id)
  );
}

function deletePublication(event) {
  const database = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const idPost = event.target.dataset.id;
  let posts = database[id].post;
  let deletando = posts.filter(elem => elem.id != idPost);

  database[id].post = deletando

  window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(database));

  home.printPosts(deletando);
}

function editPublication(event) {
  const database = JSON.parse(localStorage.getItem('colecaoDeUsuarios'));
  const id = JSON.parse(localStorage.getItem('usuarioLogado'));
  const postId = event.target.dataset.id;
  const paragrafo = document.querySelector(`p[data-id='${postId}']`);
  paragrafo.contentEditable = 'true';
  paragrafo.focus()
  paragrafo.onblur = () => {
    paragrafo.contentEditable = 'false';

    const postIndex = database[id].post.findIndex(post => post.id == postId)
    database[id].post[postIndex].postagem = paragrafo.textContent;

    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(database));
  }
}

function template(postagem, postId) {
  const template = `
    <div class= 'container-postagen'>
    <p data-id='${postId}'>${postagem}</p> 
      ${Button({
        id: postId,
        title: 'Editar',
        onClick: editPublication,
      })}
      ${Button({
        id: postId,
        title: 'Deletar',
        onClick: deletePublication,
      })}
    </div>`

  return `${Card({ children: template })}`
}

function Home() {
  const template = `
    <div class="tam-header">
      <header class='title-header'> 
        <h1>Escamb</h1>
        <a class="nav-link" href="#login">Sair</a>
      </header> 
    </div>
    <div class="container-home">
    <form>
      ${Textarea({
        class: 'js-message-textarea',
        placeholder: 'Escreva aqui sua mensagem',
        type: 'text',
      })}
    <div class='js-btn-publish'>
        ${Button({
        id: 'Botão',
        title: 'Publicar',
        onClick: subimitPublication,
      })}
    </div>
    </form>
    <article class="resp">
    <p></p>
    </article> 
   </div>
  `;

  return template;
}

export default Home;


window.home = {
  template: template,
  printPosts: printPosts,
}

