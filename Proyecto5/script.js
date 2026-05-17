


//Crear la clase del libro 
class Libro {
    constructor(titulo, autor, añoPublicacion, estado) {
        this.titulo = titulo;
        this.autor_del_libro = autor;
        this.anio = añoPublicacion;
        this.estado = estado;
        
}
}
// Quitar la descripcion de la clase ya que no es necesaria
//Agregar un nuevo libro y mostrarlo en la consola
let primer_libro= new Libro(
                "La perla",
                "John Steinbeck",
                1947,
                "Disponible",
);
let segundo_libro= new Libro(
                "1984",
                "George Orwell",
                1948,
                "Disponible",
);
let tercer_libro= new Libro(
                "Frankenstein",
                "Mary Shelley",
                1818,
                "Prestado",
);
//Describir cada libro en la consola
function describir_libro(libro) {
        console.log("Titulo: " + libro.titulo);
        console.log("Autor: " + libro.autor_del_libro);
        console.log("Año publicado: " + libro.anio);
        console.log("Estado: " + libro.estado);
        //Para que no este todo montado la informacion de cada libro en la consola 
        console.log(" ");
    
}
describir_libro(primer_libro);
describir_libro(segundo_libro);
describir_libro(tercer_libro)