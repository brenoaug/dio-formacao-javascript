//entrada do programa
const nota1 = 3;
const nota2 = 5;
const nota3 = 5;

//calculo da media do aluno
media = (nota1 + nota2 + nota3) / 3;

//condições para saber se o aluno foi aprovado, reprovado ou está de recuperação
if (media >= 7) {
  console.log(`A média do aluno é ${media.toFixed(1)}. Está aprovado!`);
} else if (media >= 5 && media < 7) {
  console.log(`A média do aluno é ${media.toFixed(1)}. Está de recuperação!`);
} else {
  console.log(`A média do aluno é ${media.toFixed(1)}. Está reprovado!`);
}
