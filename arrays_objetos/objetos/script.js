let cachorro = {
  patas: 4,
  nome: "Vikinha",
  raca: "Vira-lata",
  cor: "Branca com manchas pretas",
  latir: function() {
    console.log("Au au!");
  },
  correr: function() {
    console.log("Vikinha está correndo!");
  },
  comer: function() {
    console.log("Vikinha está comendo!");
  }
};

console.log(cachorro.nome);
console.log(cachorro.comer());

// arrays => [] => coleção de dados
// objetos => {} => coleção de dados
// arrays de objetos => [ {}, {}, {} ] => coleção de objetos