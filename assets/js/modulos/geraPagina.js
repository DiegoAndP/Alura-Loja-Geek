const destaquesContent = `<div class="destaques__container">
    <div class="destaques__slide">
        <div class="destaques__info">
            <p class="destaques__titulo">Dezembro Promocional</p>
            <p class="destaques__descricao">Produtos selecionados com 33% de desconto.</p>
            <a href="#" class="destaques__botao botao--padrao">Ver Consoles</a href="#">
        </div>
    </div>    
    </div>
</section>`
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
const headerContent =  `<nav class="topo__nav">
<div class="topo__wrapper-logo">
    <a href='./index.html'><img src="./assets/img/Logo.svg" alt="Logo Alura Geek" class="topo__logo"></a>
    <p class="topo__logo-azul">Alura</p><p class="topo__logo-preto">Geek</p>
</div>
<div class="topo__wrapper-busca">
    <input class="topo__busca" type="search" name="busca" placeholder="O que deseja encontrar?">
    <div class="topo__wrapper-login">
        <a href="./login.html" class="topo__botao">Log in</a>
        <div class="topo__dropdown"></div>
    </div>
</div>
<div class="topo__dropcontent">
    <input class="topo__buscadrop topo__busca" type="search" name="busca" placeholder="O que deseja encontrar?">
</div>
</nav>`
const footerSobre = `<p class="rodape__descricao">Desenvolvido por Diego Andrade <br> 2022</p>`;

export const criaHeader = () => {
    document.querySelector(".topo").innerHTML = headerContent;
};
export const criaDestaques = () => {
    const sessaoDestaques = document.querySelector('.destaques');
    sessaoDestaques.innerHTML = destaquesContent;
}

export const criaContato = () => {
    document.querySelector(".contato").innerHTML = footerContato;
}

export const criaSobre = () => {
    document.querySelector('.rodape').innerHTML = footerSobre;
};

