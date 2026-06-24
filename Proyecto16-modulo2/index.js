//1.Divide el arreglo en dos mitades.
//2.Resuelve el problema recursivamente para encontrar el máximo en cada mitad.
//3.Combina las soluciones comparando los máximos de ambas mitades.
//4.Devuelve el número máximo encontrado.

function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); // floor para obtener el índice del medio
    const left = arr.slice(0, mid);  //slice para obtener la primera mitad
    const right = arr.slice(mid);    //slice para obtener la segunda mitad

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);   // Llamada recursiva para la primera mitad
    const rightMax = findMax(right); // Llamada recursiva para la segunda mitad

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [55, 60, 70, 12, 9, 10, 5, 3, 2, 1];
console.log(findMax(numbers)); // Salida esperada: 70