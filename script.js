const readlineSync = require('readline-sync');
let a = parseFloat(readlineSync.question("Digite o valor 1: "));
let b = parseFloat(readlineSync.question("Digite o valor 2: "));
let op = readlineSync.question("Digite uma opção (+, -, *, /): ");
let r;

switch (op) {
    case "+":
        r = a + b;
        console.log(r);
        break;
    case "-":
        r = a - b;
        console.log(r);
        break;
    case "*":
        r = a * b;
        console.log(r);
        break;
    case "/":
        r = a / b;
        console.log(r);
        break;
    default:
        console.log("Opção inválida.");
        break;
}

console.log("Resposta: ", r);
