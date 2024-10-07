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