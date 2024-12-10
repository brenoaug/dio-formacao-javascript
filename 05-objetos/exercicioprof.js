class Carro{
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  calcularGastoPercurso(distanciaKm, valorCombustivel){
    return valorCombustivel * this.gastoMedio * distanciaKm;
  }
}

const fox = new Carro('Volkswagen', 'vermelho', 1 / 10);

console.log(`O valor gasto no percurso é de R$${fox.calcularGastoPercurso(100, 5.80).toFixed(2)}`); // 52.72727272727273