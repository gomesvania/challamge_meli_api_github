//Mutação de objetos => Modificar o valor de uma propriedade de um objeto criando uma nova referência para o objeto antigo.

let pessoa = {
  nome: 'Mateus',
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = 'Nathaly';

console.log(pessoa.nome);

pessoa.nome = 'André';

console.log(pessoa2.nome);