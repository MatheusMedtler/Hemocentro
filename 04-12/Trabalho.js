
//Listar doadores 
const readline = require("readline-sync");

const listaDeDoadores = [ //Cadastrados 
    { nome: "Carlos Silva", idade: 29, peso: 72, tipoSanguineo: "O+", dataUltimaDoacao: "15/09/2023" },
    { nome: "Ana Souza", idade: 40, peso: 65, tipoSanguineo: "A-", dataUltimaDoacao: "10/03/2024 "},
    { nome: "Marcos Dias", idade: 35, peso: 80, tipoSanguineo: "B+", dataUltimaDoacao: "22/01/2024" },
    { nome: "Clara Melo", idade: 25, peso: 55, tipoSanguineo: "AB-", dataUltimaDoacao: "05/06/2022" },
    { nome: "João Ferreira", idade: 42, peso: 90, tipoSanguineo: "O-", dataUltimaDoacao: "2023/11/18" },
    { nome: "Fernanda Lima", idade: 33, peso: 68, tipoSanguineo: "A+", dataUltimaDoacao: "2024/04/10" },
    { nome: "Luiz Carvalho", idade: 50, peso: 85, tipoSanguineo: "B-", dataUltimaDoacao: "2024/02/05" },
    { nome: "Beatriz Almeida", idade: 27, peso: 60, tipoSanguineo: "AB+", dataUltimaDoacao: "2024/05/18" }
  ];
  
  function lista1 () {

      console.log("\n--------------------   LISTAGEM DE DOADORES:   --------------------")
      console.log("\n")
      console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      console.log("----------------------------------------------------------------------------")

      //FOR para percorrer minha array 
        for (let i = 0; i < listaDeDoadores.length; i++) 
       { console.log(`${listaDeDoadores.nome}|   ${listaDeDoadores.idade}|   ${listaDeDoadores.peso}| ${doador.tipoSanguineo}  |  ${doador.ultimaDoacao}`);
    }
  } 

  function perguntas () {
    let nome = readlineSync.question("Nome: ")
    let idade = readlineSync.questionInt("Idade: ");
    let peso = readlineSync.questionInt("Peso (em kg): ");
    let tipoSanguineo = readlineSync.question("Tipo sanguineo: ");
    let ultimaDoacao = readlineSync.question("Data ultima doação (dd/mm/aaaa)")

}

let lista = { //Cadastrados 
    nome: nome,
     idade: idade, 
     peso: peso,
     tipoSanguineo: tipoSanguineo,
     dataUltimaDoacao: dataUltimaDoacao }

     listaDeDoadores.push(lista)
