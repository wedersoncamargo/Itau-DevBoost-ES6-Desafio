export default class DOMInjector {
    inject(content) {
        let div = document.createElement("DIV");
        div.innerHTML = content 
        const element = document.querySelector("#clientes")
        element.appendChild(div)
    }
}