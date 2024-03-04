// Seleciona o botão com a classe .btn-plataforma
const botao = document.querySelector(".btn-plataforma");

// Seleciona o elemento com a classe .plataformas dentro do botão .btn-plataforma
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", () => {
    // Quando o botão é clicado, alterna a classe 'ativo' no elementoPlataformas
    elementoPlataformas.classList.toggle("ativo");
});
