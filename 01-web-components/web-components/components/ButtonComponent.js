const template = document.createElement("template") 

template.innerHTML = `
  <style>
    button{
        background-color: blue;
        padding: 0.5em 1em;
        color: white;
        font-weight: bold;
        border: none;
        transition: all ease 0.3s;
    }

    button:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

    button.add{
        background-color: green;
    }
    
    button.substract{
        background-color: red;
    }
  </style>
    <button></button>
`

class ButtonComponent extends HTMLElement{
    constructor(){
        super()|
        this.attachShadow({ mode: "open" })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
        //obtener el atributo type
        this.type = this.getAttribute("type")
        console.log(this.type)
        //obtener el element button del shadowRoot
        this.btn = this.shadowRoot.querySelector("button")
        this.btn.innerText = this.type
        //al this.btn añadirle una clase add | substract
        this.btn.classList.add(this.type);
    }

    connectedCallback(){
        console.log(`Me rendericé ${this.type}`)
    }

    disconnectedCallback(){
        console.log(`Me desmonté ${this.type}`)

    }
}

customElements.define("button-component", ButtonComponent)

const addBtn = document.querySelector("button-component[type=add]")
addBtn.remove()