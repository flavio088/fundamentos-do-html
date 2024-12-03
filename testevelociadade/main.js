const carro1 = prompt("Informe o primeiro carro:");
const velocidade1 = parseFloat(prompt("Informe a velocidade que o primeiro carro chegou:"));
const carro2 = prompt("Informe o segundo carro:");
const velocidade2 = parseFloat(prompt("Informe a velocidade que o segundo carro chegou:"));

if (velocidade1 > velocidade2) {
    alert("O " + carro1 + " é mais rápido.");
} else if (velocidade2 > velocidade1) {
    alert("O " + carro2 + " é mais rápido.");
} else {
    alert("Os dois carros têm a mesma velocidade.");
}
 