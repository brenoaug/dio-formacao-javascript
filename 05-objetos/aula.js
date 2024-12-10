class Pessoa {
  nome;
  idade;
  anoNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = 2024 - idade;
  }

  descrever() {
    console.log(
      `Meu nome é ${this.nome} e minha idade é de ${this.idade}, nasci em ${this.anoNascimento}`);
  }
}

function compararPessoas(p1, p2){
  if(p1.idade > p2.idade)
}

const breno = new Pessoa("Breno", 27);
const vanessa = new Pessoa("Vanessa", 30);

breno.descrever();
vanessa.descrever();

console.log(breno);
