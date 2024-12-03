//Informações de quem atacou
const atacante = prompt("Informe o nome do advérsario:");
const ataque = parseFloat(prompt("informe o dano causado"));

//Informações do jogador
const nome = prompt("Informe o nome do seu personagem:");
let vida = parseFloat(prompt("Informe seu HP:"));
let defesa = parseFloat(prompt("Informe seus pontos de defesa:"));
const escudo = prompt("Possui escudo ? S/N").toUpperCase();

let dano = 0;

if (ataque > defesa && escudo === "N" ) {
    dano = ataque - defesa;
} else if (ataque > defesa && escudo === "S") {
    dano = (ataque - defesa) / 2;
}

vida -= dano;

alert(
    `${nome} sofreu ${dano} de dano.\n` +
    `Status atual:\n` +
    `Vida: ${vida}\n` +
    `Defesa: ${defesa}`
);