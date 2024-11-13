//entrada do programa
const precoCombustivel = 5.89;
let gastoCombustivelMedio = 14.4;
let distanciaKm = 178;

let valorViagem;

valorViagem = distanciaKm / gastoCombustivelMedio * precoCombustivel; 

console.log(`O valor de uma viagem de ${distanciaKm} km em um fox 2015, que consome ${gastoCombustivelMedio} km/L, com o preço da gasolina custando ${precoCombustivel} reais é de: ${valorViagem.toFixed(2)} reais.`);