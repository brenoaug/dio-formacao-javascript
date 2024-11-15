//exercicio feito antes do assistir a aula

function definindoFormaPagamento(tipoPagamento){
if(tipoPagamento == 'mais de duas vezes'){
    return `um juros de ${calcularJuros()} reais`;
}else{
  return `um desconto de ${calcularDesconto(tipoPagamento)} reais`;
}
}

function calcularDesconto(tipoPagamento){
  if(tipoPagamento == 'débito'){
    return valorDesconto = valorEtiqueta * 0.1;
}else if (tipoPagamento == 'dinheiro' || tipoPagamento == 'pix'){
    return valorDesconto = valorEtiqueta * 0.15;
}else if(tipoPagamento == 'cartão de credito'){
    return valorDesconto = 0 ;
}else
    return `${calcularJuros()}`;
}

function calcularJuros(){
  return valorJuros = valorEtiqueta * 0.1;
}

function definindoValorFinal(tipoPagamento){
  if(tipoPagamento == 'mais de duas vezes'){
    return valorFinal = valorEtiqueta + calcularJuros();
  }else{
    return valorFinal = valorEtiqueta - calcularDesconto(tipoPagamento);
  }
}


function main(tipoPagamento){
  console.log(`O valor do produto é R$${valorEtiqueta} e você escolheu pagar com ${tipoPagamento}, você terá ${definindoFormaPagamento(tipoPagamento)} e o valor final da compra será de R$${definindoValorFinal(tipoPagamento)} reais`);
}

const valorEtiqueta = 100;
main('pix');