const botoesAdd = [];

function rederizaCards(array) {

    const ulProdutos = document.getElementById("ul-produtos");

    for (i = 0; i < array.length; i++) {

        const liCards = document.createElement("li");
        const img = document.createElement("img");
        const pCategoria = document.createElement("p");
        const h2 = document.createElement("h2");
        const pText = document.createElement("p");
        const h3 = document.createElement("h3");
        const buttonAdd = document.createElement("button");

        img.src = array[i].img;
        img.alt = array[i].nameItem;

        pCategoria.innerText = array[i].tag;
        h2.innerText = array[i].nameItem;
        pText.innerText = array[i].description;
        h3.innerText = array[i].value;
        buttonAdd.innerText = array[i].addCart;
        botoesAdd.push(buttonAdd)

        liCards.append(img, pCategoria, h2, pText, h3, buttonAdd);
        ulProdutos.appendChild(liCards);

    }
}
rederizaCards(data);

console.log(botoesAdd);





function separaCategoria(array, categoria) {

    let listaCategoria = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].tag[0] === categoria) {
            listaCategoria.push(array[i]);
        }
    }

    return listaCategoria;
}
console.log(separaCategoria(data, "Camisetas"));
console.log(separaCategoria(data, "Acessórios"));
console.log(separaCategoria(data, "Calçados"));


function buscarCategoria() {
    console.log("Clicou");
}




// function renderizaCampoBusca() {

//     const campoBusca = document.getElementsByClassName("busca");

//     const inputBusca = document.createElement("input");
//     inputBusca.type = "text";
//     inputBusca.placeholder = "Digite aqui sua pesquisa";

//     // if (inputBusca.placeholder === "Camisetas") {
//     //     return separaCategoria(data, "Camisetas");
//     // } else if (inputBusca.placeholder === "Acessórios") {
//     //     return separaCategoria(data, "Acessórios");
//     // } else if (inputBusca.placeholder === "Calçados") {
//     //     return separaCategoria(data, "Calçados");
//     // }

//     const buttonBusca = document.createElement("button");
//     buttonBusca.innerText = "Buscar";

//     // buttonBusca.addEventListener("click", buscar);

//     campoBusca.append(inputBusca, buttonBusca);

// }
// renderizaCampoBusca();






function renderizaCarrinho() {

    const sectionCarrinho = document.getElementsByClassName("carrinho");
    const header = document.createElement("header");
    const h3 = document.createElement("h3");
    const main = document.createElement("main");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h3.innerText = "Carrinho de compras";
    header.appendChild(h3);

    h2.innerText = "Carrinho de compras";
    p.innerText = "Adicione itens";
    main.append(h2, p);

    sectionCarrinho.append(header, main);

    for (i = 0; i < botoesAdd.length; i++) {
        let botao = botoesAdd[i];

        botao.addEventListener("click", function (event) {
            console.log(event);
        })
    }

}

