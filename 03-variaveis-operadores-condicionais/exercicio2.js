const altura = 1.72;
let peso = 72;
let imc;

imc = peso / (altura * altura);

switch (true) {
  case (imc <= 18.5):
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso.`);
    break;
  case (imc > 18.5 && imc <= 25):
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está com o peso normal.`);
    break;
  case (imc > 25 && imc <= 30):
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está acima do peso.`);
    break;
  case (imc > 30 && imc <= 40):
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está obeso.`);
    break;
  case (imc > 40):
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está com obesidade mórbida.`);
    break;
  default:
    console.log('Erro ao calcular o IMC.');
}
