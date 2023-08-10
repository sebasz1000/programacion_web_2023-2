const template = document.createElement("template") 

template.innerHTML = `
  <style>
    h2{
        margin: 0 auto;
        text-align: center;
    }
  </style>
    <h2></h2>
`

class CounterComponent extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: "open" })
        const shadowTemplate = template.content.cloneNode(true)
        this.shadowRoot.append(shadowTemplate)

        this.value = this.getAttribute('value');
        this.h2Element = this.shadowRoot.querySelector('h2');
        this.h2Element.innerText = this.value;
    }
}

customElements.define("counter-component", CounterComponent)