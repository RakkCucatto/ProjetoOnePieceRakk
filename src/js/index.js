const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {

    botao.addEventListener("click", () => {
        const botaoSelecionado = desselecionarBotao();

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        desselecionarPersonagem();
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}

