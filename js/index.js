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



function renderizaCampoBusca() {

    const campoBusca = document.querySelector(".busca");
    const inputBusca = document.createElement("input");
    inputBusca.type = "text";
    inputBusca.placeholder = "Digite aqui sua pesquisa";

    const buttonBusca = document.createElement("button");
    buttonBusca.innerText = "Pesquisar";
    buttonBusca.addEventListener("click", pesquisarProduto);


    campoBusca.append(inputBusca, buttonBusca);

}
renderizaCampoBusca();



function pesquisarProduto() {

    let inputBusca = document.querySelector("input");
    let saida = [];
    let proutoNaoEncontrado = "Produto não encontrado";

    for (let i = 0; i < data.length; i++) {
        let verifyIfContainsObject = data[i].nameItem.toLowerCase().includes(inputBusca.value.toLowerCase())

        if (verifyIfContainsObject) {
            saida.push(data[i]);
        } else {
          inputBusca.value = proutoNaoEncontrado;
        }
    }

    rederizaCards(saida);
}



function renderizaCarrinho() {

    const sectionCarrinho = document.querySelector(".carrinho");
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
}
renderizaCarrinho();