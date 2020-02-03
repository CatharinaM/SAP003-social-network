import Input from '../components/input.js';
import Button from '../components/button.js';

function subimitProfile (event){
  const x = event.target.dataset.id;
  const paragraph = document.querySelector(`p[data-id='${postId}']`); 
  paragraph.contentEditable  = 'true';
  paragraph.focus();
  paragraph.onblur = () => {
    paragraph.contentEditable  = 'false';

    const postIndex = home.database[home.id].post.findIndex(post => post.id == postId) 
    home.database[home.id].post[postIndex].postagem = paragraph.textContent; 
    
    window.localStorage.setItem('colecaoDeUsuarios', JSON.stringify(home.database));
  }
}

function profile() {
    const template = `
    <img src="" alt="">
    <div class="container-profile">
    <h1 class= "title-profile">Perfil</h1>
    <h3> Editar perfil</h3>
    <form> 

    ${Input({
        class: 'js-nomePerfil-input',
        placeholder: 'Nome e sobrenome',
        type: 'text',
      })}
  
     ${Input({
      class: 'js-biografiaPerfil-input',
      placeholder: 'Biografia',
      type: 'text',
    })}
  
     ${Input({
      class: 'js-localizacaoPerfil-input',
      placeholder: 'Localização',
      type: 'text',
    })}
  
     ${Button({
      id: 'Botão',
      title: 'Enviar',
      onClick: subimitProfile,
    })}
  
      </form>
      <p> <a href="#home">Voltar a Home</a> </p>
      </div>
  
    `;
  
    return template;
  }
  
  export default profile;
  

