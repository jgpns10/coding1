let consulta = prompt("Escolha: 1: para dor nas costas, 2: para dor de cabeça e 3: para dor de garganta")

if (consulta == 1) {
  console.log("Você será encaminhado para um Ortopedista.");
}

else if (consulta == 2 || consulta == 3) {
  console.log("Você será encaminhado para um clínico geral");
}

else {
  console.log("Você foi corno, não tratamos suas dores aqui, procure um psicólogo.");
}