const pacientes = [];
let menu;

do {

    let listaPacientes = pacientes
    .map((nome, index) => `${index + 1}. ${nome}`)
    .join("\n");

    menu = parseFloat(
    prompt(
         `Bem vindo ao consultorio. \n Pacientes na fila:\n ${pacientes} \n 1. Adicionar novo paciente \n 2. Consultar paciente \n 3. Sair \n` 
    )
  );

  switch (menu) {
    case 1:
        let adicionado = pacientes.push(prompt("Informe seu nome:"));
        alert(`Paciente foi adicionado`);
      break;
    case 2:
        if (pacientes.length > 0) {
            let atendido = pacientes.shift();
            alert(`Paciente ${atendido} foi atendido`);
        } else {
            alert("Não há pacientes na fila para atender.");
        }
      break;

    case 3:
        alert(`Saindo...\nAté a próxima`)
      break;

      default: 
      alert("opção invalida")
          break;
  }

} while (menu !== 3);
