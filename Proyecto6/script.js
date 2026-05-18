/*Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)*/
// Obtener elementos
const botonagregar = document.getElementById('agregarboton');
const listaComentarios = document.getElementById('commentaLista');

// Agregar evento al dar clic al boton
botonagregar.addEventListener('click', function() {

 // Obtener el comentario, obtiene con el id del input
let comentario = document.getElementById('commentaInput').value;

    // Ver si el cometario no esta vacio
    if (comentario != '') {

        // Crear comentario
        let nuevoComentario = document.createElement('li');

        // Crear la fecha actual
        let fecha = new Date();

       //Obtener la fecha y hora con el formato 
        let fechaCompleta =
        fecha.getDate() + "/" +
        // NOTA: en getMonth() se obtiene del 1 a 11 por eso es obligatorio que se sume uno
        (fecha.getMonth() + 1) + "/" +
        fecha.getFullYear() + " " +
        fecha.getHours() + ":" +
        fecha.getMinutes();

        nuevoComentario.textContent = comentario + "  y con fecha de  " + fechaCompleta;

        // Mostrar comentario y con appendChild se agrega el nuevo comentario a la lista de comentarios 
        listaComentarios.appendChild(nuevoComentario);


    }
});