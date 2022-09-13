



function renderizaHeaderNav() {

    let listaCategoria = ["Todos", "Acessórios", "Calçados", "Camisetas"];

    const header = document.querySelector(".section-header");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    for (i = 0; i < listaCategoria.length; i++) {

        const li = document.createElement("li");
        const buttonCategoria = document.createElement("button");
        buttonCategoria.innerText = listaCategoria[i];

        // buttonCategoria.outerText;
   
        li.appendChild(buttonCategoria);
        ul.appendChild(li);   
    
    }


    nav.appendChild(ul);
    header.append(nav);
}
renderizaHeaderNav();


function separaCategoria() {

    let listaCategoria = [];
    // const listaNav = this.button;
    // listaNav.outerText;

    for (let i = 0; i < data.length; i++) {
        if (data[i].tag[0] === listaNav) {
            listaCategoria.push(data[i]);
        }
    }
    return listaCategoria;
}

    
    
separaCategoria();