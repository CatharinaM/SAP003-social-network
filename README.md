# Rede Social - Escamb
## O projeto
Neste projeto de Rede Social construímos uma cuja temática é **trocas**, no qual o objetivo é o usuário poder relacionar tanto objetos que queira trocar bem como as experiencias que queira interagir para aprender algo ensinando algo em troca. 

## Características técnicas 
Nós utilizamos o HTML5, CCS3, JavaScript(ES6+) e LocalStorage para desenhar estrutura de dados  que relacionar com as funcionalidades geridas nas historias dos usuarios. também foi dado enfoque no mobile first, sendo para isso utilizado flexbox.  
O sistema de rotas  para trocar de uma tela para outra de maneira dinâmica (SPA), foi construído utilizando o hashchange...

### Planejamento

# Histórias de Usuário

* Como usuário novo, devo poder criar uma conta com email e senha válidos para poder iniciar uma sessão e ingressar na Rede Social.

* Como usuário novo, devo poder ter a opção de iniciar sessão com minha conta do Google ou Facebook para ingressar na Rede Social sem necessidade de criar uma conta de email válido.

* Como usuário logado devo poder criar, guardar, modificar no mesmo lugar (in place) e deletar publicações (post) privadas ou públicas.

* Como usuário logado devo poder ver todos os posts públicos e privados que criei até o momento, do mais recente para o mais antigo, assim como a opção de trocar a configuração de privacidade dos meus posts.

* Eu como usuário logado, posso dar like e ver a contagem de likes em minhas publicações

* Eu como usuário logado, posso escrever, salvar, editar ou deletar um comentário em minhas publicações.

* Ao final devo poder ingressar na Rede Social e poder visualizar os dados de meu perfil criado e editá-los.

* Te deixamos um exemplo de como definir critérios de aceitação e definições de pronto para uma H.U.


## Desenvolvimento FrontEnd

* Tela mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Tela Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)




## Objetivos de aprendizagem

### Boas Práticas de Desenvolvimento
- [ ] Modularização
- [ ] Nomenclatura / Semântica
- [ ] Linting

***

## Recursos

### Mobile first

O conceito de [_mobile first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz referência a um processo de desenho e desenvolvimento que parte de como se vê e como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas _responsivas_.

### Múltiplas telas

Nos projetos anteriores nossas aplicações eram compostas por uma só tela principal. Neste projeto vamos introduzir a necessidade de ter que dividir nossa interface em várias _páginas_ ou _telas_ e oferecer uma maneira de navegar entre elas.

### Manipulação de dados

Nos projetos anteriores consumimos dados, porém ainda não havíamos escrito dados (salvar edições, criar dados, deletar, etc ...). Neste projeto você e sua equipe terão que criar (salvar) novos dados, assim como ler, atualizar e modificar dados existentes. Estes dados serão guardados de forma remota usando [Firebase](https://firebase.google.com/) ou de modo local usando `localStorage`.

### CSS

Neste projeto queremos que ganhe confiança e experiência com CSS, para isso usará [`flexbox`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) para posicionar seus elementos.

Recorde que não poderá usar frameworks CSS, somente *css* ou [*sass*](https://sass-lang.com/).

### Dicas e Leituras complementares:

#### Primeiros passos

1. Escolham alguém da equipe para fazer um :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) do repositório.
2. :arrow_down: Depois faça o [clone](https://help.github.com/articles/cloning-a-repository/)
   para o seu computador (cópia local).
3. 📦 Instale as dependências do projeto rodando o comando `npm install`. Mas
   antes disso tenha certeza de ter instalado o [Node.js](https://nodejs.org/)
   (que inclui o [npm](https://docs.npmjs.com/)).
4. Para ver a interface do seu programa no navegador, use o comando `npm start`
   para iniciar o servidor web e entre na url `http://localhost:5000` no seu
   navegador.
5   . Let's Code! :rocket:

#### Leituras

* [Mobile First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Firebase Hosting do Zero](https://www.youtube.com/watch?v=0R2Ur0xKNz4)
* [Firebase Auth do Zero](https://www.youtube.com/watch?v=A0li9VEuCBs)
* [Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox - LMS](https://github.com/rafaelbcerri/curricula-js/tree/fix-content/topics/css/01-css/08-flexbox)

***
