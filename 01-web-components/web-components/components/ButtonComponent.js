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

class ButtonComponent extends HTMLElement {
    constructor() {
        super() |
        this.attachShadow({ mode: "open" })
        this.updateCounter = this.updateCounter.bind(this)
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)
        //obtener el atributo type
        this.type = this.getAttribute("type")
        //obtener el element button del shadowRoot
        this.btn = this.shadowRoot.querySelector("button")
        this.btn.innerText = this.type
        this.target = this.getAttribute("target")
        console.log(this.target)
        //al this.btn añadirle una clase add | substract
        this.btn.classList.add(this.type);
        // 1. obtener el counter-component
        this.contador = document.getElementById(this.target)

    }

    connectedCallback() {
        //console.log(`Me rendericé ${this.type}`)
        //Listener botón
        if(this.btn)  
            this.btn.addEventListener('click', this.updateCounter)
    }

    updateCounter(){
            console.log(this)
            //console.log(`Click en: ${this.type}`);
            //2. obtener el atributto "value" del counter-component
            this.currentValue = +this.contador.getAttribute("value")
            //3. calcular el nuevo valor según el tipo del botón
            const newValue = (this.type === "add") 
                                ? this.add(this.currentValue)
                                : this.substract(this.currentValue)
            //4. setear al attributo "value  de "counter-component ese nuevo valor
            this.contador.setAttribute("value", newValue)
    }

    disconnectedCallback() {
        console.log(`Me desmonté ${this.type}`)
        if(this.btn) 
            this.btn.removeEventListener("click", this.updateCounter)

    }

    add(value) {
        return value + 1
     }

    substract(value) {
        return (value > 0) 
                ? (value - 1) 
                : value; 
    }
}

customElements.define("button-component", ButtonComponent)

