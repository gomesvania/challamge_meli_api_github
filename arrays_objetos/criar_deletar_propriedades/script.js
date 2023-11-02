let pessoa = {
  nome: 'João',
  idade: 20,
  profissao: 'Desenvolvedor Web',
  possuiFaculdade: true,
};

// Acessando propriedades de um objeto
console.log(pessoa.nome); // 'João'

// Criando propriedades de um objeto
pessoa.cidade = 'São Paulo';
console.log(pessoa.cidade); // 'São Paulo'

//Deletando propriedades de um objeto
delete pessoa.nome;
console.log(pessoa.nome); // undefined