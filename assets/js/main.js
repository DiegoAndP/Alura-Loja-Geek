import { validacao } from "./modulos/loginModulo.js"
import { criaContato } from "./modulos/footer.js"
import { criaSobre } from "./modulos/sobre.js"
import { criaHeader } from "./modulos/header.js";

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