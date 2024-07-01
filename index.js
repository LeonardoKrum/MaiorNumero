const prompt = require("prompt-sync")();

function maiorNumeroPossivel(num) {
    let digits = num.split("");

    for (let i = 0; i < digits.length; i++) {
        for (let j = 1 + 1; j < digits.length; j++) {
            if (digits[i] < digits[j]) {
                let aux = digits[j];
                digits[i] < digits[j];
                digits[j] < digits[i];
            }
        }
    }
    return digits.join("");
}
const numero = prompt("Qual número vc deseja insirir?");

let maior = maiorNumeroPossivel(numero);
console.log(maior);
