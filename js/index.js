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




function clickCategoria(event) {

    let sectionMain = document.querySelector(".cards");
    let listaCategoriaTratada = [];

    for (let i = 0; i < data.length; i++) {

        if (event.target.innerText === "Todos") {
            listaCategoriaTratada.push(data[i]);
        } else if (data[i].tag.includes(event.target.innerText)) {
            listaCategoriaTratada.push(data[i]);
        }
    }
   
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




function pesquisarProduto() {

    let sectionCards = document.querySelector(".cards");
    let inputPesquisa = document.querySelector("input");
    let saida = [];

    for (let i = 0; i < data.length; i++) {

        let verifyIfContainsObject = data[i].nameItem.toLowerCase().includes(inputPesquisa.value.toLowerCase());

        if (verifyIfContainsObject) {
            saida.push(data[i]);
        }
    }

    renderizaCards(saida);
}




function addCarrinho() {
    let ul = document.querySelector("#ul-produtos");

    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            
            for (let i = 0; i < data.length; i++) {
                if (event.target.id == data[i].id) {
                    carrinho.push(data[i]);
                }
            }
        }

        if (carrinho.length !== 0) {
            carrinhoCheio();
        } 

        let buttonsRemover = document.querySelectorAll(".main-carrinho li button");
        
        for (let i = 0; i < buttonsRemover.length; i++) {
            buttonsRemover[i].addEventListener("click", remover);
        }

        // let listaPrecos = document.querySelectorAll(".main-carrinho li");
        // console.log(listaPrecos);

        // for(i = 0; i < listaPrecos.length; i++){
        //     let precoItem = parseInt(listaPrecos[i].value);
        //     soma(precoItem);
        // }
        
    })
}
addCarrinho()




function remover(event) {
  event.target.parentElement.parentElement.remove();
}




function carrinhoCheio() {

    const main = document.querySelector(".main-carrinho");
    main.innerText = "";
    const ul = document.createElement("ul");
    ul.id = "ul-carrinho";


    for (let i = 0; i < carrinho.length; i++) {

        const li = document.createElement("li");
        const figure = document.createElement("figure")
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const preco = document.createElement("p");
        const button = document.createElement("button");

        img.src = carrinho[i].img;
        h3.innerText = carrinho[i].nameItem;
        preco.innerText = carrinho[i].value.toLocaleString("pt-br", { style: "currency", currency: "BRL", });
        button.innerText = "Remover";

        figure.append(img)
        div.append(h3, preco, button);
        li.append(figure, div);
        ul.appendChild(li);
        main.append(ul);
    }
}


// function soma(preco){

//     let contador = 0;

//     for(let i = 0; 0 < preco.length; i++){
//         contador += preco[i];
//     }
//     console.log(contador)
// }
