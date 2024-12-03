let nota = parseFloat(prompt("Informe sua nota: Entre 0 e 10"))
let nota2 = parseFloat(prompt("Informe sua segunda nota: Entre 0 e 10"))

media = (nota + nota2)/ 2;

while (nota >= 0 && nota <= 10 || nota2 >= 0 && nota2 <= 10  ) {
    alert(`Sua média é: ${media}`)
    break
  }
    