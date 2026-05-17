/*Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.*/


librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros que has leido:");
    for (let i=0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
    /* Personalmente uso mas el of  ya que que sirve tambien para objetos poder  recorrerlos 
    for ( let leido of librosLeidos) {
        console.log(leido);
    }   */
}

agregarLibro("Las Aventuras de Sherlock Holmes");
agregarLibro("Cien Años de Soledad");
agregarLibro("Las Vacas Quiviquitas");
mostrarLibrosLeidos();