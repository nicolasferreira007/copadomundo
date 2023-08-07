const prompt = require("prompt-sync")();

console.log("desafio copa do mundo - anos em que o brasil foi campeao");
console.log("======================================================");

const anosCampeao = [1958, 1962, 1970, 1994, 2002];
let tentativas = 0;
let acertos = 0;

while (acertos < 5) {
    const pergunta = `em que ano o brasil foi campeao da copa do mundo? (${acertos + 1}/5) `;
    const respostaUsuario = number(prompt(pergunta));
    tentativas++;

    if (anosCampeao.incluides(respostaUsuario)) {
        console.log("parabens! resposta correta!");
        acertos++;
    } else {
      console.log("resposta incorreta. tente novamente!");
    }
}

console.log(`parabens! voce acertou todas as 5 perguntas em ${tentativas} tentativas.`);