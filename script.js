//EJERCICIO 1 
let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) { 
    return arr.join ("")
}
let result = printOutString (arr)
console.log (result);

//EJERCICIO 2 metódo map 
let numeros = [1,2,4,5]
fuction duplicarNumeros(arr) {
    const duplicar = arr.map( num => num * 2); 
    console.log (duplicar); 
}

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

//EJERCICIO 4 
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let cursosComunes = student1Courses.filter(course => student2Courses.includes)(course)); 
if (cursosComunes.length > 0) {
    console.log('Cursos comunes' cursosComunes); 
} else {
    console.log ('No hay cursos comunes.')
}

//EJERCICIO 5
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
// Imprime todas las personas de la lista.
gente.forEach(persona => {
    console.log(persona);
});
//Eliminar "Dani" de la matriz.
gente.splice(1, 1); // Dani está en el índice 1
// Eliminar "Juan" del array.
gente.splice(2, 1); // Juan está en el índice 2 después de eliminar a Dani
// Mover a "Luis" al frente de la matriz.
let index = gente.indexOf("Luis");
if (index !== -1) {
    gente.splice(index, 1);
    gente.unshift("Luis");
}
console.log(gente); // Imprimir el array actualizado
// Agregar su nombre al final de la matriz (usando 'gente', no 'frutas').
gente.push("Karen"); // Asegúrate de que "Karen" esté en comillas
console.log(gente);
//Usando un bucle, itera a través de esta matriz y después de console.log "María", salga del bucle.
gente.forEach(persona => { // Cambiar "gente" a "persona"
    console.log(persona);
    if (persona === "María") {
        return; // 'return' aquí solo saldrá de la función de callback, no del bucle
    }
});
//Escribe el comando que da el indexOf donde se encuentra "María".
console.log(gente.indexOf("María"));