const readline = require("readline-sync");

function perguntas () {
    let nome = readlineSync.question("Nome: ")
    let idade = readlineSync.questionInt("Idade: ");
    let peso = readlineSync.questionInt("Peso (em kg): ");
    let tipoSanguineo = readlineSync.question("Tipo sanguineo: ");
    let ultimaDoacao = readlineSync.question("Data ultima doação (dd/mm/aaaa)")

}
perguntas()

let lista= { //Cadastrados 
    nome: nome,
     idade: idade, 
     peso: peso,
     tipoSanguineo: tipoSanguineo,
     dataUltimaDoacao: dataUltimaDoacao }

     lista.push(lista)