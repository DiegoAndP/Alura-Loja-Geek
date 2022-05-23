import { manipulaDados } from "./modulos/manipulaDados";

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
   const textArea = formulario.querySelector('.adiciona__textarea').value;

   inputs.forEach(el => checaValidity.push(el.validity.valid));
   if(checaValidity.every(valid => valid == true)) {
      
      guardaProduto(inputs, textArea);
   }
});

function guardaProduto (inputs, textArea) {

   const listaProduto = manipulaDados('produto') || [];
   const descricaoAlt = () => {
      const textoAlt = "Descrição ainda precisa ser adicionada.";
   
      if(!textArea) {
       return textoAlt;
       }
   };
   
   const novaId = () => listaProduto.length;
   
   const produto = {
      imagem: inputs[0].nextElementSibling.style.backgroundImage,
      produto: inputs[1].value,
      valor: inputs[2].value,
      categoria: inputs[3].value,
      descricao : descricaoAlt(),
      id: novaId()
   }


   listaProduto.push(produto);   
   manipulaDados.exporta('produto', listaProduto);
   // window.location.href ="./sucesso.html";

}
