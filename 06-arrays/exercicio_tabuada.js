const numero = 7;
let i = 1;

//usando o for
/*for (let i = 1 ; i <= 10; i++){
    resultadoMultiplicacao = numero * i;
    console.log(`${i} x ${numero} = ${resultadoMultiplicacao}`);
}*/

//usando o while
/*
while (i<=10){
    resultadoMultiplicacao = numero * i;
    console.log(`${i} x ${numero} = ${resultadoMultiplicacao}`);
    i++;
}*/

//usando do while
do {
    resultadoMultiplicacao = numero * i;
    console.log(`${i} x ${numero} = ${resultadoMultiplicacao}`);
    i++;
}while (i<=10);

