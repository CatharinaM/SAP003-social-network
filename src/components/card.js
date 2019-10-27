function Card(props) {
    return `
      <div class="card">
      <header class="header-card"><header>
        ${props.children}
      </div>
    `;
  }
  
export default Card;