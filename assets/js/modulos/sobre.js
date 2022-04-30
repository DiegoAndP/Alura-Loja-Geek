const footerSobre = `<p class="rodape__descricao">Desenvolvido por Diego Andrade <br> 2022</p>`;

export const criaSobre = () => {
    document.querySelector('.rodape').innerHTML = footerSobre;
};