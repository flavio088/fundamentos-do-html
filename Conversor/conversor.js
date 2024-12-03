let valor = parseFloat(prompt("Informe um valor em metro para a conversão:"));
let medida = prompt("Informe a medida para qual deseja converter:\nkm\nhm\ndam\ndm\ncm\nmm");

let resultado;

switch (medida) {
    case "mm":
        resultado = valor * 1000;
        alert(`${valor} metros é igual a ${resultado} milímetros`);
        break;
    case "cm":
        resultado = valor * 100;
        alert(`${valor} metros é igual a ${resultado} centímetros`);
        break;
    case "dm":
        resultado = valor * 10;
        alert(`${valor} metros é igual a ${resultado} decímetros`);
        break;
    case "dam":
        resultado = valor / 10;
        alert(`${valor} metros é igual a ${resultado} decâmetros`);
        break;
    case "hm":
        resultado = valor / 100;
        alert(`${valor} metros é igual a ${resultado} hectômetros`);
        break;
    case "km":
        resultado = valor / 1000;
        alert(`${valor} metros é igual a ${resultado} quilômetros`);
        break;
    default:
        alert("Opção inválida");
}