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

export const criaHeader = () => {
    document.querySelector(".topo").innerHTML = headerContent;
};
