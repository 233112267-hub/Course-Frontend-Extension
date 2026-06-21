//Estás desarrollando una herramienta para ayudar a escritores a identificar la palabra más larga en un texto. El usuario ingresa un párrafo, y tu tarea es encontrar esa palabra utilizando la técnica Sliding Window. Este problema simplifica la lógica para que los alumnos practiquen cómo manejar cadenas de texto con ventanas deslizantes.

//Instrucciones para resolver el problema:

//2.Desliza una ventana que recorra cada palabra del arreglo y compara su longitud con la palabra más larga encontrada hasta ese momento.
//3.Devuelve la palabra más larga al final del proceso.
//4.Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/4adef1db05f8cd3696780b666715c8c3

function palabraMasLarga(texto)
 { 
    //1.Divide el texto en palabras individuales utilizando el método .split(' ') en la cadena.
    const palabras = texto.split(" ");
    let palabraMasLarga = "";
     // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < palabras.length; i++) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }  
    }
    // TODO: Retornar la palabra más larga encontrada
    return palabraMasLarga;
}
// Ejemplo de uso
const texto = "Que bonito es aprender algo nuevo .";
// TODO: Llama a la función y muestra el resultado
console.log(palabraMasLarga(texto)); // Resultado esperado: "programación"