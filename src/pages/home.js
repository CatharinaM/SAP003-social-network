import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';
 
function enviarPublicacao(){
  const text = document.querySelector('.js-mensagem-textarea').value;
   if (text) {   
    const posts = home.bancoDeDados[home.id].post; 

    const mensagem ={
    postagem: document.querySelector('.js-mensagem-textarea').value,
    likes: 0,
    privacidade: 'publico',
    id: new Date().getTime(),
    comentario:[]
  }

   posts.unshift(mensagem);

   window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

   home.imprimirPosts(posts);
   document.querySelector('.js-mensagem-textarea').value = ''; 
  }        
}

function imprimirPosts (posts) {
  document.querySelector('.resp').innerHTML = '';  

  posts.map( elem => 
    document.querySelector('.resp').innerHTML += window.home.template(elem.postagem, elem.id)
  )
}

function deletarPublicacao(event){
  const idPost = event.target.dataset.id
  let posts = home.bancoDeDados[home.id].post; 
  let deletando = posts.filter(elem => {
    return  elem.id != idPost 
  })

  home.bancoDeDados[home.id].post = deletando

  window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

  home.imprimirPosts(deletando);
}

function editarPublicacao (event){
  const postId = event.target.dataset.id;
  const paragrafo = document.querySelector(`p[data-id='${postId}']`); 
  paragrafo.contentEditable  = 'true';
  paragrafo.focus() 
  paragrafo.onblur = () => {
    paragrafo.contentEditable  = 'false';

    const postIndex = home.bancoDeDados[home.id].post.findIndex(post => post.id == postId) 
    home.bancoDeDados[home.id].post[postIndex].postagem = paragrafo.textContent; 
    
    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));
  }
}

function template(postagem, postId){
  const template = `
  <div class= 'container-postagen'>
  <p data-id='${postId}'>${postagem}</p> 
  ${Button({
    id: postId,
    title: 'Editar',
    onClick: editarPublicacao,
  })}
  ${Button({
    id: postId,
    title: 'Deletar',
    onClick: deletarPublicacao,
  })}
 
  </div>`
  
  return `${Card({children: template})}`
}

function Home() {
  const template = `
  <div class="tam-header">
    <header class='titulo-header'> 
      <h1>Escamb</h1>
      <a class="nav-link" href="#login">Sair</a>
    </header> 
  </div>

  <div class="container-home">
    <h1></h1> 

    <form> 

  ${Textarea({
    class: 'js-mensagem-textarea',
    placeholder: 'Escreva aqui sua mensagem',
    type: 'text',
   })}

<div class='js-botao-publicar'>
    ${Button({
      id: 'Botão',
      title: 'Publicar',
      onClick: enviarPublicacao,
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
  imprimirPosts: imprimirPosts,
  id: JSON.parse(localStorage.getItem('usuarioLogado')),
  bancoDeDados: JSON.parse(localStorage.getItem('colecaoDeUsuarios'))
}

