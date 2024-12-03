let opcao = "";

do {
    opcao = prompt(
        "Calculadora Geometrica: \n" +
        "\nEscolha uma formageometrica:\n1 - área do triângulo\n2 - área do retângulo\n3 - área do quadrado\n4 - área do trapezio\n5 - área do círculo\n6 - sair "
    );

    switch (opcao) {

        case "1":
            let triangulobase = parseFloat(prompt("Informe a base do triângulo"));
            let trianguloaltura = parseFloat(prompt("Informe a altura do triângulo"));
            function areatriangulo(triangulobase, trianguloaltura) {
                return (triangulobase * trianguloaltura) / 2
            }
            alert(`área do triângulo é ${areatriangulo(triangulobase, trianguloaltura)}`);

            break;

        case "2":
            let retangulobase = parseFloat(prompt("Informe a base do retângulo"));
            let retanguloaltura = parseFloat(prompt("Informe a altura do retângulo"));
            function arearetangulo(retangulobase, retanguloaltura) {
                return retangulobase * retanguloaltura
            }
            alert(`área do retângulo é ${arearetangulo(retangulobase, retanguloaltura)}`);

            break;

        case "3":
            let lado = parseFloat(prompt("Informe qual o valor do lado do quadrado"));
            function quadrado(lado) {
                return lado * lado
            }
            alert(`área do quadrado é ${quadrado(lado)}`);
            break;
        case "4":
            let basemaior = parseFloat(prompt("Informe o valor da base maior:"));
            let basemenor = parseFloat(prompt("Informe o valor da base menor:"));
            let altura = parseFloat(prompt("Informe o valor da altura:"))
            function trapezio(basemaior, basemenor, altura) {
                return (basemaior + basemenor) * altura / 2
            }
            alert(`área do Trapézio é ${trapezio(basemaior, basemenor, altura)}`);
            break;
        case "5":
            let raio = parseFloat(prompt("Informe o valor do raio:"));
            function circulo(raio) {
            return (raio * raio) * 3,14 
            }
            alert(`área do circulo é ${circulo(raio)}`)
            break;
        case "6":
            alert("Saindo...");
            break;
        default:
            alert("Opção Inválida");
            break;
    }
} while (opcao !== "6");
