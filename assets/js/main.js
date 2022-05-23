import { criaContato,criaDestaques,criaHeader,criaSobre } from "./modulos/geraPagina.js";
import { validacao } from "./modulos/loginModulo.js"

if (window.location.pathname == '/index.html') {
  criaDestaques();
};

criaHeader();
criaContato();
criaSobre();

//Adiciona um escutador de eventos para cada caixa de texto
const inputAll = document.querySelectorAll("input");
inputAll.forEach((input) => {
  input.addEventListener("input", (ev) => {
    validacao(ev.target);
  });
});