//EJERCICIO 3 metódo reduce
let numeros = [1,2,4,5]
let sum = numeros.reduce((accumulator, currentValue)) => {
    return accumulator + currentValue;
}, 0); 

let producto = numeros.reduce((accumulator, currentValue)) => {
    return accumulator * currentValue; 
}, 1); 
console.log(`La suma es: ${sum}`); 
console.log(`El producto de la suma es: ${producto}´); 