class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){
    return this.peso / (this.altura * this.altura);
  }

  classificarImc(){
    const imc = this.calcularImc();
    switch (true) {
      case (imc <= 18.5):
        return `Seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso.`;
      case (imc > 18.5 && imc <= 25):
        return `Seu IMC é ${imc.toFixed(1)}. Você está com o peso normal.`;
      case (imc > 25 && imc <= 30):
        return `Seu IMC é ${imc.toFixed(1)}. Você está acima do peso.`;
      case (imc > 30 && imc <= 40):
        return `Seu IMC é ${imc.toFixed(1)}. Você está obeso.`;
      case (imc > 40):
        return `Seu IMC é ${imc.toFixed(1)}. Você está com obesidade mórbida.`;
      default:
        return 'Erro ao calcular o IMC.';
    }
    }
  }

  /*imprimirResultado(){
    return `Eu sou ${this.nome} e meu IMC é de ${this.calcularImc().toFixed(2)}`;
  }*/

//instanciando a pessoa Jose
const jose = new Pessoa('José', 70, 1.75);
const breno = new Pessoa('Breno', 72, 1.72);


//imprimindo
//console.log(jose.imprimirResultado());
console.log(jose.classificarImc()); 
