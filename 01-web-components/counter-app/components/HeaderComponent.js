/* Header Component */

const template = document.createElement("template")
template.innerHTML = `
<style>

header{
    display: flex;
    justify-content: center;
}
  h1{
    color: yellow;
    margin-top: 3rem;
  }

</style>
<header>
  <h1><slot></slot></h1>
</header>
`

// creamos una clase para consumir template y definir el web component

export class HeaderComponent extends HTMLElement{
  constructor(){
    super()
    //añadir la sombra a la clase: shadowRoot
    this.attachShadow({ mode: "open"})
    //Obtener el contenido del template
    const shadowTemplate = template.content.cloneNode(true)
    //agregamos el clon de template a shadowRoot de la clase
    this.shadowRoot.append(shadowTemplate)
  }
}

//Registramos el componente que vamos a utilizar
customElements.define("header-component", HeaderComponent)