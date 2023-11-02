let carro = {
  portas: 4,
  portamalas: '200l',
  motor: '2.0',
}

let adicionais = {
  tetosolar: true,
  arcondicionado: true,
  cambioautomatico: true,
}

console.log(carro);

// O método Object.assign() copia os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retornará o objeto de destino.
Object.assign(carro, adicionais);

// Objeto de destino (carro) recebeu as propriedades de outro objeto (adicionais)
console.log(carro);