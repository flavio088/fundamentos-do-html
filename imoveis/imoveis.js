
/*
Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.

O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.

O menu deve ter a opção de salvar um imóvel.

Para salvar um novo imóvel o programa deve pedir as seguintes informações:Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.

Nome do proprietário.

Quantidade de quartos.

Quantidade de banheiros.

Se possui garagem.

O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/



const imoveis = [];
let opcao = ""

do {

    opcao = prompt(
        "Imóveis cadastrados: " + imoveis.length +
        "\nEscolha uma ação:\n1 - Salvar um novo imóvel\n2 - Mostrar todos os imóveis salvos\n3 - Sair"
    );

    switch (opcao) {
        case "1":
            let novo = {
                proprietario: prompt("Qual o nome do proprietário"),
                quartos: prompt("Quantos quartos possui ?"),
                banheiro: prompt("Quantos banheiros possui ?"),
                garagem: prompt("Possui garagem ? (Sim/Não)")
            }
            imoveis.push(novo)
            alert("Novo imovel adicionado")
            break
        case "2":
            if (imoveis.length === 0) {
                alert("Nenhum imóvel cadastrado!");
            } else {
                let listaImoveis = "Imóveis cadastrados:\n\n";
                imoveis.forEach((imovel, index) => {
                    listaImoveis += 
                        `Imóvel ${index + 1}:\n` +
                        `Proprietário: ${imovel.proprietario}\n` +
                        `Quartos: ${imovel.quartos}\n` +
                        `Banheiros: ${imovel.banheiro}\n` +
                        `Garagem: ${imovel.garagem}\n\n`;
                });
                alert(listaImoveis);
            }

            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while (opcao !== "3");
