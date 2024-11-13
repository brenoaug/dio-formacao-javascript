let checkNumber;
const isOddNumber = 0;


checkNumber = isOddNumber % 2 === 0;

// == igualdade
// === igualdade estrita
// != diferente
// !== diferente estrito

if(isOddNumber === 0){
  console.log(`O número ${isOddNumber} é neutro`);
}else if(checkNumber !== true){
    console.log(`O número ${isOddNumber} é impar`);
}else{
  console.log(`O número ${isOddNumber} é par`);
}

