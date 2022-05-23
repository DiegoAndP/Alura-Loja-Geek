const dataGeral = document.querySelector('[data-geral]');
const iconeRemove = dataGeral.querySelector('[data-deleta]');
const iconeEdita = dataGeral.querySelector('[data-edita]');

 //data geral recebe id dos items do storage
iconeRemove.addEventListener('click', (ev) => {
    console.log(ev.target.closest('[data-geral]'));
    // ev.target.closest('[data-geral]').remove();
});

iconeEdita.addEventListener('click', (ev) => {
    console.log(ev.target);
});