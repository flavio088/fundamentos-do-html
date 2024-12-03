let valor1 = parseFloat(prompt("Informe um valor:"));
let valor2 = parseFloat(prompt("Informe outro valor:"));

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor2 !== 0 ? valor1 / valor2 : "Divisão por zero não é permitida";


alert(valor1 + " + " + valor2 + " = " + soma);
alert(valor1 + " - " + valor2 + " = " + subtracao);
alert(valor1 + " * " + valor2 + " = " + multiplicacao);
alert(valor1 + " / " + valor2 + " = " + divisao);
