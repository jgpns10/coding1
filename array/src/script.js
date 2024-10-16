let livros = ["javascript", "ECMAScript", "MongoDB"];

//consulta por index e mostra o nome do elemento

console.log (livros[1][2]);

//consulta por nome do elemento e mostra o index

let consulta = livros.indexOf("ECMAScript")

console.log(consulta)

//remove o último elemento e mostra o elemento removido

console.log(livros.pop());

//adiciona elementos no final da array e mostra a quantidade do array

console.log(livros.push("novoLivro"));
console.log(livros)
