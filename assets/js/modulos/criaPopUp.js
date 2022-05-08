const botaoVerProduto = document.querySelectorAll('.catalogo__link');
const ImportaProdutos = JSON.parse(localStorage.getItem('produto'));
const dadosProdutos = Object.values(ImportaProdutos);
const arrayClasses = ['.popup__wrapper','.popup__close'];

arrayClasses.forEach( el => {
    document.querySelector(el).addEventListener('click', ev => {
        document.querySelector('.popup__wrapper').classList.add('popup__hidden');
    })
})

botaoVerProduto.forEach(el => {
    el.addEventListener('click', ev => {
        ev.preventDefault();

        const produtoId = ev.path[2].attributes[1].value;

        adicionaValoresPopup(recebeValoresPopup(dadosProdutos,produtoId));
      })
    })


function recebeValoresPopup (dadosProdutos, id) {
  const valorProduto = {
    nome: dadosProdutos[id].produto,
    categoria: dadosProdutos[id].categoria,
    descricao: dadosProdutos[id].descricao,
    imagem: dadosProdutos[id].imagem,
    valor:dadosProdutos[id].valor  
  }

return valorProduto;
};

function adicionaValoresPopup(produto) {
  const seletor = document.querySelector('.popup__wrapper');
  seletor.querySelector('.popup__imagem').style.backgroundImage = produto.imagem;
  seletor.querySelector('.popup__nome').textContent = produto.nome;
  seletor.querySelector('.popup__valor').textContent = produto.valor;
  seletor.querySelector('.popup__descricao').textContent = produto.descricao;
  seletor.classList.remove('popup__hidden');
};