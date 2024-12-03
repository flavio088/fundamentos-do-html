let saldo = 0;

do {
    // Exibe o menu e captura a opção
    let valor = parseFloat(prompt(`Saldo atual: ${saldo} \n 1. Adicionar dinheiro \n 2. Remover dinheiro \n 3. Sair`));

    switch (valor) {
        case 1:
            // Pergunta quanto deseja adicionar
            let adicionar = parseFloat(prompt("Quanto deseja adicionar?"));
            saldo += adicionar;  // Atualiza o saldo
            alert(`Foi adicionado ${adicionar} ao seu saldo. Saldo atual: ${saldo}`);
            break;

        case 2:
            // Pergunta quanto deseja remover
            let remover = parseFloat(prompt("Quanto deseja remover?"));
            if (remover > saldo) {
                alert("Saldo insuficiente!");
            } else {
                saldo -= remover;  // Atualiza o saldo
                alert(`Foi removido ${remover} do seu saldo. Saldo atual: ${saldo}`);
            }
            break;

        case 3:
            alert("Sistema sendo encerrado...");
            break;

        default:
            alert("Opção inválida!");
            break;
    }

} while (valor !== 3);