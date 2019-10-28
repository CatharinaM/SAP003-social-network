import Button from '../components/button.js';
import Textarea from '../components/textarea.js';
import Card from '../components/card.js';




 /*function comentarPublicação(){
  const idPost = event.target.dataset.id
  const textComentario =  document.querySelector('.js-mensagem-textarea').value;
  if (text) {  
    const posts =  home.bancoDeDados[home.id].post;
    const postIndex = post.findIndex(elem => elem.id == idPost);
    posts[postIndex].comentario.push(textComentario)
    

    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));

    home.imprimirComentario(textComentario);
 }

 function imprimirComentario (coment) {
  document.querySelector('.resp-comentario').innerHTML = '';

  //document.querySelector('.resp-comentario').innerHTML += window.home.templateComentario(elem.comentario, elem.id))
 //OU
  document.querySelector('.resp-comentario').innerHTML += comentario.textContent
}*/
 
function enviarPublicacao(){
  const text = document.querySelector('.js-mensagem-textarea').value;
   if (text) {   //isso que faz só ser publicado quando tiver algo escrito (antes só clicando em publicar já aparecia o card)
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
  console.log(home)
  console.log(home.id)
  console.log(home.banco)
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
  paragrafo.focus() //focus (é para dar o foco, quando você clica em um campo para digitar algo.) e onblur (é para salvar quando tirar do foco)
  paragrafo.onblur = () => {
    paragrafo.contentEditable  = 'false';

    
    const postIndex = home.bancoDeDados[home.id].post.findIndex(post => post.id == postId) //  findIndex: retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
    home.bancoDeDados[home.id].post[postIndex].postagem = paragrafo.textContent; // textContent: serve para obter o conteúdo de texto de um elemento
    
    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.bancoDeDados));
  }
}


// function templateComentario(comentario, postId){
//   const template = `
//   <div class= ''>
//   <p data-id='${postId}'>${comentario}</p> 
//    ${Textarea({
//     class: 'js-mensagem-textarea',
//     placeholder: 'Escreva aqui seu comentário',
//     type: 'text',
//    })}
//   </div>`
//   return `${Card({children: templateComentario})}`
// }
  


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
  ${Button({
    id: 'Botão',
    title: 'Comentar',
    //onClick: comentarPublicação,
  })}
  
  </div>`
  
  return `${Card({children: template})}`
}

function Home() {
  const template = `
  <div class="tam-header">
  <p class='titulo-header3'></p> <header class='titulo-header'> <h1>Escamb</h1><p class='titulo-header2'></p> </header> 
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

    <article class="resp-comentario">
    <p></p>
    </article> 

    <p class="nav-link"><a href="#login">Sair</a> </p>

</div>
  `;

  return template;
}

export default Home;


window.home = {
  template: template,
  imprimirPosts: imprimirPosts,
  //imprimirComentario:imprimirComentario,
  id: JSON.parse(localStorage.getItem('usuarioLogado')),
  bancoDeDados: JSON.parse(localStorage.getItem('colecaoDeUsuarios'))
}

 