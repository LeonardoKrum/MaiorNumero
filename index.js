const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("Qual número vc deseja insirir?\n");

function maiorNumeroPossivel() {
    if (input === null || input === "") {
        return "Nenhum número fornecido!";
    }
    let digits = input.split("");
    digits.sort((a, b) => b - a);
    let maiorNumero = digits.join("");

    return maiorNumero;
}

let resultado = maiorNumeroPossivel();
console.log(`O maior número possível com os dígitos fornecidos é: ${resultado}`);
