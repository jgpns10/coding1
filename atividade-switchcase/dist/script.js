let nome = prompt("Boa tarde, qual o seu nome?")
let treino = prompt("Qual o turno que você deseja escolher?")

switch(treino) {
  case "Manhã":
    console.log(`Olá ${nome}, tudo bem? seu turno será pela manhã!`)
    break;
    
  case "Tarde":
    console.log(`Olá ${nome}, tudo bem? seu turno será pela tarde!`)
    break;
    
  case "Noite":
    console.log(`Olá ${nome}, tudo bem? seu turno será pela noite!`)
    break;
    
  default:
    console.log(`Olá ${nome}, tudo bem? não foi possível concluir seu cadastro, horário não encontrado`)
}