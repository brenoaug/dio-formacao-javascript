//preço combustivel
const precoGasolina = 6.07;
const precoEtanol = 4.79;

//gasto do carro com cada tipo de combustivel
const gastoCombustivelGasolina = 14.4;
const gastoCombustivelEtanol = 10.8;

//o tipo de combustivel que o carro foi abastecido
const tipoCombustivel = 'gasolina';

//distancia percorrida
const distanciaKm = 178;

//valor final da viagem
let valorViagem;

//condicões para saber o valor da viagem a partir do tipo de combustivel e a distancia da viagem que abasteceu o carro
if (tipoCombustivel === 'gasolina') {
  valorViagem = (distanciaKm / gastoCombustivelGasolina) * precoGasolina;
  console.log(`O valor de uma viagem de ${distanciaKm} km em um fox 2015, que consome ${gastoCombustivelGasolina} km/L de ${tipoCombustivel}, com o preço da ${tipoCombustivel} custando ${precoGasolina} reais é de: ${valorViagem.toFixed(2)} reais.`);
} else if (tipoCombustivel === 'etanol') {
  valorViagem = (distanciaKm / gastoCombustivelEtanol) * precoEtanol;
  console.log(`O valor de uma viagem de ${distanciaKm} km em um fox 2015, que consome ${gastoCombustivelEtanol} km/L de ${tipoCombustivel}, com o preço do ${tipoCombustivel} custando ${precoEtanol} reais é de: ${valorViagem.toFixed(2)} reais.`);
} else {
  console.log("O carro não pode ser abastecido com esse tipo de combustível");
}
