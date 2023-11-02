let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nome = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Paulo', 'Joaquim', 'Antônio', 'Mariana', 'Juliana'];
let bool = [true, false, true, false, true, false, true, false, true, false];
let misto = [1, 'João', true, 2, 'Maria', false, 3, 'José', true, 4, 'Ana', false, 5, 'Pedro', true, 6, 'Paulo', false, 7, 'Joaquim', true, 8, 'Antônio', false, 9, 'Mariana', true, 10, 'Juliana', false];

// console.log(arr);
// console.log(nome);
// console.log(bool);
// console.log(misto);

//Acessando os valores de um array nas suas respectivas posições
console.log(arr[6]); //imprime o valor 7
console.log(nome[8]); //imprime o valor Mariana
console.log(bool[3]); //imprime o valor false
console.log(misto[13]); //imprime o valor Pedro

console.log(misto[misto.length -1]); //imprime o último valor do array misto