
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






function rederizaCards() {

    const ulProdutos = document.getElementById("ul-produtos");
    const liCards = document.createElement("li");
    const img = document.createElement("img");
    const pBusca = document.createElement("p");
    const h2 = document.createElement("h2");
    const pText = document.createElement("p");
    const h3 = document.createElement("h3");
    const buttonAdd = document.createElement("button");


}
