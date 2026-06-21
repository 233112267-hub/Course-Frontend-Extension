// invitados es el arreglo de los invitados
const invitados= ["Carlos", "Ana", "Sofia", "David", "Maria","Andrea", 
                  "Andres","Luis", "Sebastian", "Elena", "Eduardo","Lalo", "Valentina"];

function invitadosjuntos(nombres) {

    // Usa un puntero al inicio del arreglo y otro al siguiente elemento.
    // inicio lo usamos para recorrer cada nombre del arreglo
    let inicio = 0;
    // siguiente lo usamos para el siguiente nombre
    // Observacion al poner  siguiente = 1 se compara el primer nombre con el segundo, luego el segundo con el tercero y así sucesivamente

    let siguiente =  1;
    // Compara las iniciales de los nombres en las posiciones.
    // Use el while para que vuelva a comparar los nombres hasta que los punteros se crucen.
    // Ejemplo: Andrea y Andres estos nombres empiezan con E por lo tanto van juntos.
    while (siguiente < nombres.length) {
 
        if (nombres[inicio][0] === nombres[siguiente][0]) {
            return [nombres[inicio], nombres[siguiente]];
        }

        inicio++;
        siguiente++;
    }

    return null;
}

console.log(invitadosjuntos(invitados));