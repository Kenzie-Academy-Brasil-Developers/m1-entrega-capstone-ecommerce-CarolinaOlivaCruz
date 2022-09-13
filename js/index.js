function renderizaHeaderNav() {

    let listaCategoria = ["Todos", "Acessórios", "Calçados", "Camisetas"];

    const header = document.querySelector(".section-header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (i = 0; i < listaCategoria.length; i++) {

        const li = document.createElement("li");
        const buttonCategoria = document.createElement("button");
        buttonCategoria.innerText = listaCategoria[i];
        buttonCategoria.addEventListener("click", clickCategoria);

        li.appendChild(buttonCategoria);
        ul.appendChild(li);

    }

    nav.appendChild(ul);
    header.append(nav);
}
renderizaHeaderNav();




// Falha na verificação;
function clickCategoria(event) {

    let sectionMain = document.querySelector(".cards");
    let listaCategoriaTratada = [];

    for (let i = 0; i < data.length; i++) {

        if (event.target.innerText === "Todos") {
            listaCategoriaTratada.push(data[i]);
        } else if (data[i].tag.includes(event.target.innerText)) {
            listaCategoriaTratada.push(data[i]);
        }
        // else if (!data[i].tag.includes(event.target.innerText)) {
        //         sectionMain.innerHTML = `<p>Sem produtos</p>`; 
        // }
    }
    // if(listaCategoriaTratada.length === 0){
    //     return sectionMain.innerHTML = `<p>Sem produtos</p>`; 
    // }

    renderizaCards(listaCategoriaTratada);
}




let botoesAdd = [];
let carrinho = [];

function renderizaCards(array) {

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
        buttonAdd.id = array[i].id;

        figure.appendChild(img);
        nav.append(pCategoria, h2, pText, h3, buttonAdd);
        liCards.append(figure, nav);
        ulProdutos.appendChild(liCards);
    }
}
renderizaCards(data);




function renderizaCampoPesquisa() {

    const campoPesquisa = document.querySelector(".busca");
    const inputPesquisa = document.createElement("input");
    inputPesquisa.type = "text";
    inputPesquisa.placeholder = "Digite aqui sua pesquisa";

    const buttonPesquisa = document.createElement("button");
    buttonPesquisa.innerText = "Pesquisar";
    buttonPesquisa.addEventListener("click", pesquisarProduto);


    campoPesquisa.append(inputPesquisa, buttonPesquisa);

}
renderizaCampoPesquisa();



// Falha na verificação;
function pesquisarProduto() {

    let sectionCards = document.querySelector(".cards");
    let inputPesquisa = document.querySelector("input");
    let saida = [];

    for (let i = 0; i < data.length; i++) {

        let verifyIfContainsObject = data[i].nameItem.toLowerCase().includes(inputPesquisa.value.toLowerCase());

        if (verifyIfContainsObject) {
            saida.push(data[i]);
        } 
        // else if (inputPesquisa !== verifyIfContainsObject) {
        //     sectionCards.innerHTML = `<p>Produto não encontrado</p>`;
        // }
    }

    renderizaCards(saida);
}




function renderizaCarrinho() {

    const main = document.querySelector(".main-carrinho");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const ul = document.createElement("ul");

    for (let i = 0; i < carrinho.length; i++) {
        let produtoCarrinho = [];
        const li = document.createElement("li");
       
    }


    h2.innerText = "Carrinho de compras";
    p.innerText = "Adicione itens";
    main.append(h2, p);
}
renderizaCarrinho();




function addCarrinho() {
    let ul = document.querySelector("#ul-produtos");
    console.log(ul)
    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            // console.log(event.target.id);
            for (let i = 0; i < data.length; i++) {
                if (event.target.id == data[i].id) {
                    carrinho.push(data[i]);
                    console.log(carrinho)
                }
            }
        }

    })
}
addCarrinho()




function somaCarrinho() {

    let soma = 0;

    for (i = 0; i < carrinho.length; i++) {

        let num = parseInt(carrinho);
        console.log(num)
        if (num === Number) {

            soma += num;
        }
    }
    console.log(soma)
    return soma;
}
somaCarrinho()