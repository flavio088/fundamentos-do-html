const numero = prompt("Olá, Mundo!! \n Informe um valor para que eu lhe informe os resultados:")
let resultados = " "

for (let fator = 1; fator <= 20 ; fator++) {
    resultados += " => " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultados)