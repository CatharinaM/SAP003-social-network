import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
// import Input from '../components/input.js';
import Card from '../components/card.js';
//import Menu from '../components/menu.js';

// function exibirMenu(){
// var veri = 1;
// var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
// var menu = document.getElementById('menu-hidde');
// if (veri == 1) {
// menu.style.left = "0px";
// veri = 0;
// }else{
// menu.style.left = "-100%";
// veri = 1;
//  }
// }

// function comentarPublicação(){
//   const postId = event.target.dataset.id;
//   const textComentario =  document.querySelector('.js-mensagem-textarea').value;
//   if (text) {  
//     const coment =  home.bancoDeDados[home.id].comentario;
//     coment.push(textComentario)
// }
 
function enviarPublicacao(){
  const text = document.querySelector('.js-mensagem-textarea').value;
   if (text) {   //isso que faz só ser publicado quando tiver algo escrito (antes só clicando em publicar já aparecia o card)
    const posts = home.bancoDeDados[home.id].post; // *aqui e lá embaixo a mesma (não entendi mto bem)

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
   document.querySelector('.js-mensagem-textarea').value = ''; //isso que faz não ficar a mensagem no textarea depois de publicar
  }        
}


function imprimirPosts (posts) {
   document.querySelector('.resp').innerHTML = '';  //isso que faz não ficar a mensagem no textarea depois de publicar

   posts.map( elem => 
      document.querySelector('.resp').innerHTML += window.home.template(elem.postagem, elem.id))
}


 function deletarPublicacao(event){
   const idPost = event.target.dataset.id
  
  let posts = home.bancoDeDados[home.id].post; // *essa parte que nãoe entendi mto bem (é o caminho para chegar a post?) (essa variavel tb está na fç enviarPublicacao)
  let deletando = posts.filter(elem => {
    return  elem.id != idPost // na hr entendi, agr não mto
  })

  
  home.bancoDeDados[home.id].post = deletando

  window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

   home.imprimirPosts(deletando);
  }

function editarPublicacao (event){
  const postId = event.target.dataset.id;
  const paragrafo = document.querySelector(`p[data-id='${postId}']`); // estudar isso
  paragrafo.contentEditable  = 'true';
  paragrafo.focus() // estudar esses: focus (é para dar o foco, quando você clica em um campo para digitar algo.) e onblur (é para salvar quando tirar do foco)
  paragrafo.onblur = () => {
    paragrafo.contentEditable  = 'false';
// tentei if/else ou mudando a ordem das duas linhas acima e não pegou (não achei a ordem mto uau)
    
    const postIndex = home.bancoDeDados[home.id].post.findIndex(post => post.id == postId) // estudar findIndex: retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
    home.bancoDeDados[home.id].post[postIndex].postagem = paragrafo.textContent; // estudar textContent: serve para obter o conteúdo de texto de um elemento
    // *não entendi mto bem essas duas linhas acima
    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));
  }
}

function template(postagem, postId){
  const template = `
  <div class= 'container-postagen'>
  <p data-id='${postId}'>${postagem}</p> 
  ${Button({
    id: postId,
    // class: 'js-botao-editar'
    title: 'Editar',
    onClick: editarPublicacao,
  })}
  ${Button({
    id: postId,
    // class: 'js-botao-deletar'
    title: 'Deletar',
    onClick: deletarPublicacao,
  })}
  ${Button({
    id: 'Botão',
    // class: 'js-botao-comentar'
    title: 'Comentar',
    //onClick: comentarPublicação,
  })}
  
  </div>`
  
  return `${Card({children: template})}`
}

function Home() {
  const template = `
  <header class='titulo-header'> <h1>Escamb</h1> </header>
  <div class="container-home">
    <h1>Nome do usuário</h1> 

    <form> 

  ${Textarea({
    class: 'js-mensagem-textarea',
    placeholder: 'Escreva aqui sua mensagem',
    type: 'text',
   })}

<div class='js-botao-publicar'>
    ${Button({
      id: 'Botão',
      //class: 'js-botao-publicar'
      title: 'Publicar',
      onClick: enviarPublicacao,
    })}
  </div>

    </form>

    <article class="resp">
    <p></p>
    </article> 

    <p><a href="#login">Sair</a> </p>
    <p><a href="#perfil">Perfil</a> </p>
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

  // <ul>
  //   <li>
  //     ${Input({ dataId: post.id, class: 'js-text', type: 'text', placeholder: 'Comentar aqui' })}
  //     ${Button({ dataId: post.id, title: 'Comentário', /*onClick: sendComment*/})}
  //   </li>
  //     ${post.comments.map(comment => `<li>${comment.text}</li>`).join('')}
  // </ul>


//INSERIR COMENTÁRIOS AOS POSTS FIXADOS
// const pegarComentario = JSON.parse(localStorage.getItem('comentarioDoPost'));
// if (!Array.isArray(pegarComentario)) {
//   pegarComentario = [];
// }

// const comentario = 

//  mensagem.comentario

// BOTÃO DO LIKE (USAR O REDUCE?)