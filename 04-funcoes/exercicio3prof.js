//exercicio guiado com o professor
function aplicarDesconto (valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicarJuros (valor, juros){
    return valor + (valor * (juros / 100));
}

//1 = a vista - debito
//2 = no dinheiro/pix
//3 = cartao de credito
//4 = mais de duas vezes
const formaPagamento = 1
const valor = 100;

console.log(`O valor final da sua compra é ${main()} reais.`);

function main(){
  if (formaPagamento === 1){
  return aplicarDesconto(valor, 10);
}else if(formaPagamento === 2){
  return aplicarDesconto(valor, 15);
}else if(formaPagamento === 3){
  return valor;
}else if(formaPagamento === 4){
  return aplicarJuros(valor, 10);
}else{
  return 'Forma de pagamento inválida';
}
}
