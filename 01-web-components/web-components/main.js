import './style.css'

//creamos el template
const template = document.createElement("template")
template.innerHTML = `
<style>
  h1{
    color: green;
  }
</style>
<header>
  <h1>Hola Mundo</h1>
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