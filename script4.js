//EJERCICIO 4 
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
let cursosComunes = student1Courses.filter(course => student2Courses.includes)(course)); 
if (cursosComunes.length > 0) {
    console.log('Cursos comunes' cursosComunes); 
} else {
    console.log ('No hay cursos comunes.')
}
