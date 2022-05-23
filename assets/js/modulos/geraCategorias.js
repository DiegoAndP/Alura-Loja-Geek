`<div" class="catalogo__conteudo">
    <div class="catalogo__topo">
        <h2 class="catalogo__titulo">{descricao}</h2>
        <a class="catalogo__vertudo" href="geral.html">Ver tudo</a>
    </div>
    <div class="catalogo__produto produto-starwars">
        <div class="catalogo__imagem">
        <p class="catalogo__nome">{nome}</p>
        <p class="catalogo__valor">{valor}</p>
        <a href="" class="catalogo__link"></a>
        </div>`;

function geraCategorias() {
  const listaCategorias = [];
  const produtosStorage = JSON.parse(localStorage.getItem("produto"));
  const produtos = Object.values(produtosStorage);

  produtos.forEach((el) => listaCategorias.push(el.categoria));
  categoriasArray = [...new Set(listaCategorias)].sort();

  categoriasArray.forEach((el) => {
    const bodyMain = document.querySelector("main");
    const section = document.createElement("section");

    bodyMain.appendChild(section).setAttribute("data-categoria", `${el}`);
  });

  alimentaCategorias(produtos);
  alimentaProdutos(produtos);
}

function alimentaCategorias(produtos) {
  const sessoes = document.querySelectorAll("section");

  sessoes.forEach((sec, id) => {
    produtos.forEach((el) => {
      if (sec.dataset.categoria == el.categoria) {
        sessoes[id].innerHTML = `<div" class="catalogo__conteudo">
                <div class="catalogo__topo">
                    <h2 class="catalogo__titulo">${el.categoria}</h2>
                    <a class="catalogo__vertudo" href="/geral.html">Ver tudo</a>
                </div>
                <div class="catalogo__wrapper"></div>`;
      }
    });
  });
}

function alimentaProdutos(produtos) {
  // const conteudo = document.querySelectorAll('.catalogo__conteudo');
  const produtosWrapper = document.querySelectorAll(".catalogo__wrapper");

  produtosWrapper.forEach((el, id) => {
    produtos.forEach((element) => {
      const section = produtosWrapper[id].closest("[data-categoria]");

      if (section.dataset.categoria == element.categoria) {
        const div = document.createElement("div");
        div.classList.add("catalogo__produto");
        produtosWrapper[id]
          .appendChild(div)
          .setAttribute("data-id", element.id);
        const catalogoProduto = produtosWrapper[id].querySelector(
          `[data-id='${element.id}']`
        );

        catalogoProduto.innerHTML = `<div class="catalogo__wrapper--produto">
    <div class="catalogo__imagem"></div>
    <p class="catalogo__nome">${element.produto}</p>
    <p class="catalogo__valor">${element.valor}</p>
    <a href="" class="catalogo__link">Ver Produto</a>
</div>`;
        console.log();
        const imagem = catalogoProduto.querySelector(".catalogo__imagem");
        imagem.style.backgroundImage = element.imagem;
      }
    });
  });
}

geraCategorias();
