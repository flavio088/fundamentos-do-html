const personagens = [
    { nivel: 42, nome: "Davi", raca: "Humano", classe: "Rei" },
    { nivel: 28, nome: "Sansão", raca: "Humano", classe: "Juiz" },
    { nivel: 35, nome: "Josué", raca: "Humano", classe: "Comandante" },
    { nivel: 35, nome: "Moisés", raca: "Humano", classe: "Profeta" },
    { nivel: 26, nome: "Débora", raca: "Humano", classe: "Juíza" },
    { nivel: 39, nome: "Maria", raca: "Humano", classe: "Mãe" },
    { nivel: 29, nome: "Pedro", raca: "Humano", classe: "Apóstolo" },
  ];
  
//const nomes = []

//for (let i = 0; i < personagens.length; i++) {
//   nomes.push(personagens[i].nome)
//}

//console.log(nomes)

//Filter

//const racas = []

//for (let i = 0; i < personagens.length; i++) {
//    if (personagens[i].raca === "Humano") {
//        racas.push(personagens[i].nome)
//    }
    
//}

//console.log(racas)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos

personagens.sort(function (a, b) {
  return a.nivel - b.nivel
})

console.log(personagens)