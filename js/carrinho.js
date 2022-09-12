
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