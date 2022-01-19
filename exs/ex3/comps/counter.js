var template = document.createElement("template"); //<template> </template> 
template.innerHTML = `
<style>
#counter {
    background-color: greenyellow;
    display: flex;
    border-style: groove;
    border: 1.5px solid black;
}

#counter > button {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border: none;
    background-color: aqua;
    margin: 5px;
    font-size: x-large;
    font-family:cursive;
    font-weight: 800;
}

#counter > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    font-family:cursive;
    font-weight: 800;
    padding: 10px;
    margin: 10px;
}

#bar {
    background-color: red;
    height: 30px;
    width: 0px;
}

#reset {

}
</style>

<div id="counter">
    <button id="inc_but">+</button>
    <div id="number">0</div>
    <button id="dec_but">-</button>
</div>
<div id="bar"></div>
<div id="reset></div>
`;

class TheCounter extends HTMLElement { 
    constructor(){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("#inc_but").onclick = () => this.inc();
        this.shadowRoot.querySelector("#dec_but").onclick = () => this.dec();
    }

    inc(){
        debugger;
        this.num = this.num + 1;
        this.updateBar();
    }

    dec(){
        this.num = this.num - 1;
        this.updateBar();
    }
    
    updateBar(){
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter)