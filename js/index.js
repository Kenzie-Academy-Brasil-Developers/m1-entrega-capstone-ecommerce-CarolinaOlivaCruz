const botoesAdd = [];

function rederizaCards(array) {

    const ulProdutos = document.getElementById("ul-produtos");
    ulProdutos.innerHTML = "";

    for (i = 0; i < array.length; i++) {

        const liCards = document.createElement("li");
        const figure = document.createElement("figure");
        const nav = document.createElement("nav");
        const img = document.createElement("img");
        const pCategoria = document.createElement("p");
        const h2 = document.createElement("h2");
        const pText = document.createElement("p");
        const h3 = document.createElement("h3");
        const buttonAdd = document.createElement("button");

        img.src = array[i].img;
        img.alt = array[i].nameItem;


        pCategoria.innerText = array[i].tag;
        pCategoria.id = "p-categoria"
        h2.innerText = array[i].nameItem;
        pText.innerText = array[i].description;
        h3.innerText = array[i].value.toLocaleString("pt-br", { style: "currency", currency: "BRL", });;
        buttonAdd.innerText = array[i].addCart;
        botoesAdd.push(buttonAdd)

        figure.appendChild(img);
        nav.append(pCategoria, h2, pText, h3, buttonAdd);
        liCards.append(figure, nav);
        ulProdutos.appendChild(liCards);

    }
}
rederizaCards(data);

// console.log(botoesAdd);



function buscarProduto() {

    let inputBusca = document.querySelector("input");
    let saida = [];

    for (let i = 0; i < data.length; i++) {

        if (inputBusca.value === data[i].nameItem) {
            saida.push(data[i]);
        }
    }

    rederizaCards(saida);
}



function renderizaCampoBusca() {
    
    const campoBusca = document.querySelector(".busca");
    const inputBusca = document.createElement("input");
    inputBusca.type = "text";
    inputBusca.placeholder = "Digite aqui sua pesquisa";

    const buttonBusca = document.createElement("button");
    buttonBusca.innerText = "Pesquisar";
    buttonBusca.addEventListener("click", buscarProduto);

    campoBusca.append(inputBusca, buttonBusca);

}
renderizaCampoBusca();

