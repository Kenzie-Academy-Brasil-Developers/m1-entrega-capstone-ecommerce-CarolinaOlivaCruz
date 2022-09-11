
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

        liCards.append(img, pCategoria, h2, pText, h3, buttonAdd);
        ulProdutos.appendChild(liCards);

    }
}
rederizaCards(data);



/*  <section class="busca">
<input type="text" placeholder="Digite aqui sua pesquisa">
<button>Buscar</button> */

function renderizaCampoBusca(categoria) {

    const campoBusca = document.getElementsByClassName("busca");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Digite aqui sua pesquisa";
    
    const button = document.createElement("button");

    campoBusca.append(input, button);
    console.log(campoBusca)
}


/* <section class="carrinho">
    <!-- <header>
        <h3>Carrinho de compras</h3>
    </header>
    <main>
        <h2>Carrinho vazio</h2>
        <p>Adicione itens</p>
    </main> --></section> */


    function renderizaCarrinho(){

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

    }