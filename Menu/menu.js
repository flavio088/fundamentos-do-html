let opcoes = parseFloat(prompt("Escolha uma opção entre as 5:\n 1.Ser Hokage \n 2. Ser Rei dos Piratas\n 3. Ser um Hunter Premiun \n 4. Ser Rei dos Magos \n 5. Encerrar"))

do {
    switch (opcoes) {
        case 1:
            alert("Boa sorte, na sua saga de Hokage")
            break;
        case 2:
            alert("Boa sorte, na sua saga de Rei dos Piratas")
            break;
        case 3:
            alert("Boa sorte, na sua saga de ser Hunter Premium")
            break;
        case 4:
            alert("Boa sorte, na sua saga de Rei dos Magos")
            break;
         case 5:
            alert("Sistema sendo encerrado...");
            break;
    
        default:
             alert("Opção Invalido")
            break;
    }

    opcoes = parseFloat(prompt("Escolha uma opção entre as 5:\n 1.Ser Hokage \n 2. Ser Rei dos Piratas\n 3. Ser um Hunter Premium \n 4. Ser Rei dos Magos \n 5. Encerrar"));
    
} while (opcoes !== 5);

alert("Encerrando...")