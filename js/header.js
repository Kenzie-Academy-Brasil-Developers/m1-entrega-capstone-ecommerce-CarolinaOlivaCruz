function renderizaHeaderNav() {

    let listaCategoria = ["Todos", "Acessórios", "Calçados", "Camisetas"];

    const header = document.querySelector(".section-header");
    const h1 = document.createElement("h1");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (i = 0; i < listaCategoria.length; i++) {

        const li = document.createElement("li");
        li.id = "header-nav"
        li.innerText = listaCategoria[i];
        ul.appendChild(li);
    }

    h1.innerText = "Weartake";

    nav.appendChild(ul);
    header.append(h1, nav);

}
renderizaHeaderNav();



function separaCategoria(categoria) {

    let listaCategoria = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].tag[0] === categoria) {
            listaCategoria.push(data[i]);
        }
    }

    return listaCategoria;
}

console.log(separaCategoria("Camisetas"));
console.log(separaCategoria("Acessórios"));
console.log(separaCategoria("Calçados"));

header-nav.addEventListener("click", separaCategoria);