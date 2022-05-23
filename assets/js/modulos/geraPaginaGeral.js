import { manipulaDados } from "./manipulaDados.js";

const adicionaProdutos = (produto) => {
    const produtoId = manipulaDados.valores(produto);
    const secaoProdutos = document.querySelector('[data-produtos]');
    
    manipulaDados.valores(produto).forEach((el,id) => {
        const geralWrapper = `<div class="geral__imagem" data-imagem>
            <div class="geral__botao">
                <div class="geral__botao-deleta" data-deleta></div>
                <div class="geral__botao-edita" data-edita></div>
            </div>
        </div>
        <div class="geral__info">
            <p class="geral__info-nome">${produtoId[id].produto}</p>
            <p class="geral__info-valor">${produtoId[id].valor}</p>
            <p class="geral__info-id">${produtoId[id].id}</p>
        </div>`
        const div = document.createElement('div');

        div.classList.add('geral__wrapper');
        div.setAttribute('data-produto-id',produtoId[id].id);
        div.innerHTML = geralWrapper;
        div.querySelector('[data-imagem]').style.backgroundImage = produtoId[id].imagem;
        secaoProdutos.appendChild(div);
    })
}

adicionaProdutos('produto');