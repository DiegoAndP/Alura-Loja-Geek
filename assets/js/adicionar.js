const nomeLogin = document.querySelector('.topo__botao');


window.addEventListener('load', (e) => {
   e.target.querySelector('.topo__botao').textContent = 'Administrador';
});


const formulario = document.querySelector('.adiciona__form');
const botaoAdicionaProduto = formulario.querySelector('[data-submit]')

botaoAdicionaProduto.addEventListener('click',(element)=> {
   element.preventDefault();

   const checaValidity = [];
   const formulario = document.querySelector('.adiciona__form');
   const inputs = formulario.querySelectorAll('input');
   const textArea = formulario.querySelector('textarea').value;
   const botaoAdicionaProduto = formulario.querySelector('[data-submit]')

   inputs.forEach(el => checaValidity.push(el.validity.valid));
   if(checaValidity.every(valid => valid == true)) {
      
      guardaProduto(inputs, textArea);


   }
     
});

function guardaProduto (inputs, textArea) {

   const textoAlt = "Descrição ainda precisa ser adicionada.";

   if(!textArea) {
      textArea = textoAlt;
    }

   const produto = {
      imagem: inputs[0].nextElementSibling.style.backgroundImage,
      produto: inputs[1].value,
      valor: inputs[2].value,
      categoria: inputs[3].value,
      descricao : textArea
   }

   const listaProduto = JSON.parse(localStorage.getItem('produto')) || [];
   listaProduto.push(produto);   
   localStorage.setItem('produto', JSON.stringify(listaProduto));
   window.location.href ="./sucesso.html";

}
