const regexnome = '^([^!-?]){3,30}$';
const footerContato = `<div class="contato__container">
<div class="contato__wrapper-logo">
    <a href='./index.html'><img src="./assets/img/Logo.svg" alt="Logo Alura Geek" class="contato__logo"></a>
    <p class="contato__logo-azul">Alura</p><p class="contato__logo-preto">Geek</p>
</div
>
<ul class="contato__lista">
    <li class="contato__lista-itens"><a href="#">Quem somos</a></li>
    <li class="contato__lista-itens"><a href="#">Política de Privacidade</a></li>
    <li class="contato__lista-itens"><a href="#">Programa fidelidade</a></li>
    <li class="contato__lista-itens"><a href="#">Nossas lojas</a></li>
    <li class="contato__lista-itens"><a href="#">Quero ser franqueado</a></li>
    <li class="contato__lista-itens"><a href="#">Anuncie aqui</a></li>
</ul>
</div>
<form class="contato__form">
<p class="contato__titulo">Fale Conosco</p>
<div class="contato__container-nome">
    <label for="nome">Nome</label>
    <input type="text" id="nome" required class="contato__nome" data-tipo="nome" pattern=${regexnome}>
    <span class="contato__span"></span>
</div>
<div>
<textarea name="" placeholder="Escreva a sua mensagem" data-tipo="mensagem" cols="30" rows="10" class="contato__mensagem"></textarea>
</div>
<button class="contato__enviar">Enviar Mensagem</button>
</form>`;


export const criaContato = () => {
    document.querySelector(".contato").innerHTML = footerContato;
}
