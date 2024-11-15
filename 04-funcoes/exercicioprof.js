

function calculadorImc(peso, altura){
  return peso / (Math.pow(altura, 2));
}

function classificadorImc(imc){
  if (imc <= 18.5){
    return `Seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso.`;
  } else if (imc > 18.5 && imc <= 25){
    return `Seu IMC é ${imc.toFixed(1)}. Você está com o peso normal.`;
}else if (imc > 25 && imc <= 30){
    return `Seu IMC é ${imc.toFixed(1)}. Você está acima do peso.`;
}else if (imc > 30 && imc <= 40){
    return `Seu IMC é ${imc.toFixed(1)}. Você está obeso.`;
}else if (imc > 40){
    return `Seu IMC é ${imc.toFixed(1)}. Você está com obesidade mórbida.`;
}else{
    return `Erro ao calcular o IMC.`;
    }
}

// Main
(function (){
  const peso = 72;
  const altura = 1.72;

  const imc = calculadorImc(peso, altura);

  console.log(classificadorImc(imc));
})();

