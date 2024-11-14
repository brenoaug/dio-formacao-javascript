const valorEtiqueta = 100;

const pagamentoDebito = false;
const pagamentoDinheiroPix = true;
const pagamentoAteDuasVezes = false;
const pagamentoMaisDeDuasVezes = false;

let valorFinal;

if(pagamentoDebito === true){
  valorFinal = valorEtiqueta - (valorEtiqueta * 0.1);
  console.log(`O valor final da compra é de R$${valorFinal.toFixed(2)}`);
}else if (pagamentoDinheiroPix === true){
  valorFinal = valorEtiqueta - (valorEtiqueta * 0.15);
  console.log(`O valor final da compra é de R$${valorFinal.toFixed(2)}`);
}else if(pagamentoAteDuasVezes === true){
  valorFinal = valorEtiqueta;
  console.log(`O valor final da compra é de R$${valorFinal.toFixed(2)}`);
}else if(pagamentoMaisDeDuasVezes === true){
  valorFinal = valorEtiqueta + (valorEtiqueta * 0.1);
  console.log(`O valor final da compra é de R$${valorFinal.toFixed(2)}`);
}else{
  console.log('Forma de pagamento inválida');
}