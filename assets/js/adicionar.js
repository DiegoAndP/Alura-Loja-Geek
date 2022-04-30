const nomeLogin = document.querySelector('.topo__botao');

window.addEventListener('load', (e) => {
   e.target.querySelector('.topo__botao').textContent = 'Administrador';
});

const formulario = document.querySelector('[data-imagem]');
const formularioWrapper = formulario.closest('.adiciona__wrapper');

formulario.addEventListener('change',(ev)=>{
   console.log(ev.target);
});

function adicionaProduto (evento, file) {

}