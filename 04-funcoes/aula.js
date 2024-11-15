//funções: pequeno trecho de código que podemos incovar em qualquer parte do programa

//funcoes que não tem retorno (procedimentos)
function sayMyName(name) {
  console.log(`Your name is ${name}`);
}


sayMyName('Breno'); //invocando a função
sayMyName('Vanessa'); //invocando a função

function quadrado(valor){
  return valor * valor;
}

const quadradoDeDois = quadrado(2);

console.log(quadradoDeDois + quadradoDeDois);

