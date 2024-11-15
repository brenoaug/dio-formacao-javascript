//codigo feito antes de visualizar a resolução do professor

function main(){ 
  if (imc <= 18.5){
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso.`);
  } else if (imc > 18.5 && imc <= 25){
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está com o peso normal.`);
}else if (imc > 25 && imc <= 30){
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está acima do peso.`);
}else if (imc > 30 && imc <= 40){
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está obeso.`);
}else if (imc > 40){
    console.log(`Seu IMC é ${imc.toFixed(1)}. Você está com obesidade mórbida.`);
}else{
    console.log('Erro ao calcular o IMC.');
}
}

function calcularImc(peso, altura){
  return imc = peso / Math.pow(altura, 2);
}

main(calcularImc(72, 1.72));



