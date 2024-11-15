

function escrevaMeuNome(nome, sobrenome) {
  return `Meu nome é ${nome} ${sobrenome}`;
}

function verificadorIdade(idade){
  if(idade < 18){
    return `sou menor de idade.`;
  }else{
    return `sou maior de idade.`;
  }
}

function main(idade, nome, sobrenome){
  console.log(`${escrevaMeuNome(nome,sobrenome)} e minha idade é ${idade}, logo ${verificadorIdade(idade)}`);
} 

main(27, 'Breno', 'Augusto');
main(30, 'Vanessa', 'Cristina');






