class Carro{
  marca;
  modelo;
  cor;
  gastoMedio;

  constructor(marca, modelo, cor, gastoMedio){
    this.marca = marca;
    this.modelo = modelo
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }
  
  descreverCarro() {
    console.log(`Meu carro é dá ${this.marca}, modelo ${this.modelo}, cor ${this.cor} com gasto médio de ${this.gastoMedio} km/l`);
  }

  gastoViagem(distancia, valorCombustivel){
    const valorFinal = valorCombustivel * (distancia / this.gastoMedio);
    console.log(`Para percorrer ${distancia} km, você gastará R$ ${valorFinal.toFixed(2)}`);
  }
}

const breno = new Carro('Volkswagen', 'Fox', 'vermelho' , 11);
breno.descreverCarro();
breno.gastoViagem(100, 5.80);
