const readline = require('readline-sync');

const lista= [ //Cadastrados 
    { nome: "Carlos Silva", idade: 29, peso: 72, tipoSanguineo: "O+", dataUltimaDoacao: "15/09/2023" },
    { nome: "Ana Souza", idade: 40, peso: 65, tipoSanguineo: "A-", dataUltimaDoacao: "10/03/2024 "},
    { nome: "Marcos Dias", idade: 35, peso: 80, tipoSanguineo: "B+", dataUltimaDoacao: "22/01/2024" },
    { nome: "Clara Melo", idade: 25, peso: 55, tipoSanguineo: "AB-", dataUltimaDoacao: "05/06/2022" },
    { nome: "João Ferreira", idade: 42, peso: 90, tipoSanguineo: "O-", dataUltimaDoacao: "18/11/2022" },
    { nome: "Fernanda Lima", idade: 33, peso: 68, tipoSanguineo: "A+", dataUltimaDoacao: "10/04/2024" },
    { nome: "Luiz Carvalho", idade: 50, peso: 85, tipoSanguineo: "B-", dataUltimaDoacao: "05/02/2024" },
    { nome: "Beatriz Almeida", idade: 27, peso: 60, tipoSanguineo: "AB+", dataUltimaDoacao: "18/05/2024" }
  ];
  
  function listaDeDoadores () {

      console.log("\n--------------------   LISTAGEM DE DOADORES:   --------------------")
      console.log("\n")
      console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      console.log("----------------------------------------------------------------------------")
      
        for (let i = 0; i < listaDeDoadores.length; i++) 
        {
            console.log(`${listaDeDoadores[i].nome}       | ${listaDeDoadores[i].idade}  |         |  ${listaDeDoadores[i].peso}  |     | ${listaDeDoadores[i].tipoSanguineo}   |        |  ${listaDeDoadores[i].dataUltimaDoacao} `);
        }
        
  } 



//Função pra buscar Doadores por ultima data de doacao

function UltimaDataDoacao() {
  console.log("\n \n \n ---------------------------------------------------")
  console.log("      BUSCAR DOADOR POR DATA DA ÚLTIMA DOAÇÃO      ")
  console.log("---------------------------------------------------")
  let dataDesejada = readline.question("Digite a data desejada (dd/mm/aaaa): ")

}




// Buscar Doador por tipo sanguineo
function buscarDoadorTipoAMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")




    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "A+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoBMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "B+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoABMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "AB+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoOMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "O+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoAMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "A-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoBMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "B-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoABMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "AB-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}

function buscarDoadorTipoOMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "O-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
}



function buscarDoadorTipoSangue () {
    console.log("\n\n\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O- \n9. Voltar");

    const escolhaDoSangue = Number(readline.question('Digite o numero conforme o tipo sanguineo desejado: '))

    switch (escolhaDoSangue) {
        case 1: 
        buscarDoadorTipoAMais()
            break;
        case 2:
        buscarDoadorTipoBMais()
            break;
        case 3:
        buscarDoadorTipoABMais()
            break;
        case 4:
        buscarDoadorTipoOMais()
            break;
        case 5:
        buscarDoadorTipoAMenos() 
            break;
        case 6:
        buscarDoadorTipoBMenos()
            break;
        case 7:
        buscarDoadorTipoABMenos()
            break;
        case 8:
        buscarDoadorTipoOMenos()
            break;
        case 9:
            console.log("\nVoltando...")
            return;
        default:
            console.log("\nOpcao invalida\n");
            return;
    }

}





// Menu
function exibirMenu () {
    let opcao;
    while (true) {
        opcao = Number(readline.question("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== \n\n1. Cadastrar doador \n2. Listar doadores \n3. Buscar doador por tipo sanguineo \n4. Buscar doador por data da ultima doacao \n5. Sair \n-Escolha uma numero correspondente a opcao desejada: "));
        switch (opcao) {
            case 1:
                cadastroDeDoador()
                break;
            case 2:
                listaDeDoadores()
                break;
            case 3:
                buscarDoadorTipoSangue()
                break;
            case 4:
                buscarDoadorDataDoacao()
                break;
            case 5:
                console.log("\nSaindo...\n");
                return;
            default:
                console.log("\nOpcao invalida\n");
                break;
        }
    }
}

exibirMenu();