/*
if (condição) {
    //aqui você coloca um resultado que vai acontecer caso a condição seja verdadeira
} else {
    // Caso seja o SE(if), seja falso, você coloca aqui uma segunda opção para o programa rodar
}
*/

const idade = prompt("Informe a sua idade: ")

if (idade >= 18 ) {
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
}

/*Veja, o programa pergunta a idade ao usuário. Conforme o que ele for responder, esse valor irá ser jogado para a condição, que se a logica for
verdadeira a variavel idade for maior ou igual a 18, o programa irá devolver a resposta "Você é maior de idade", Senão(ELSE)
dai vem a segunda opção,"Você é menor de idade", caso a logica dentro da condição não for verdadeira */
