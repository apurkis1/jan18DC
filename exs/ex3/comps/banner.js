var template_banner = document.createElement("template"); //<template> </template> 
template_banner.innerHTML = `
<h1>BANNER</h1>
`

class TheBanner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.shadowRoot.appendChild(template_banner.content.cloneNode(true));
    }
}
customElements.define("the-banner", TheBanner)
