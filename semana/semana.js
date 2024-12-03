let valor = parseFloat(prompt("Digite um número de 1 a 7:"))

switch (valor) {
        case 1:
            alert(`${valor} representa o Domingo, um final de semana`)
        break;
        case 2:
            alert(`${valor} representa o Segunda-Feira, um dia útil`)
        break;
        case 3:
            alert(`${valor} representa o Terça-Feira, um dia útil`)
        break;
        case 4:
            alert(`${valor} representa o Quarta-Feira, um dia útil`)
        break;
        case 5:
            alert(`${valor} representa o Quinta-Feira, um dia útil`)
        break;
        case 6:
            alert(`${valor} representa o Sexta-Feira, um dia útil`)
        break;
        case 7:
            alert(`${valor} representa o Sábado, um final de semana`)
        break;
    default: 
    alert("Valor indefinido")
        break;
}