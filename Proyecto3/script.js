// Problema: Clasificación de Frutas
/*
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).
*/

tipos_de_frutas=["manzana", "platano", "naranja","manzana", "platano", "naranja","manzana",]
/*Observacion este elemento no es un objeto entonces mi nueva alternativa es por fin crear un objeto */
//let cantidad_de_frutas = [0,0,0] USADO EN MATRICES 
let cantidad_de_frutas =  
{
    manzana: 0,
    platano: 0,
    naranja: 0
}
// Despues de agregar mi objeto me aparece NaN de tal forma que al final no se suma la cantidad
//Solucion:
let sumatoria = 0;

// SE uso el ciclo for para que pueda recorrer el arreglo de frutas 
for (let i = 0; i < tipos_de_frutas.length; i++) {
    console.log(tipos_de_frutas[i]);
    // Observacion para que se cuente el tipo de frutas se puede usar un if 

    if(tipos_de_frutas[i] == "manzana") {
    //cantidad_de_frutas[0] = cantidad_de_frutas[0] + 1 se quita 
    cantidad_de_frutas.manzana += 1
    }else if (tipos_de_frutas[i] == "platano") {
    //cantidad_de_frutas[1] = cantidad_de_frutas[0] + 1 se quita 
    cantidad_de_frutas.platano += 1
    }else if (tipos_de_frutas[i] ==  "naranja") {
    //cantidad_de_frutas[2] = cantidad_de_frutas[0] + 1 se quita 
    cantidad_de_frutas.naranja += 1
  }
}
// Imprime la cantidad total de cada tipo de fruta :)
// Ultima observacion llamar la propiedad del objeto si no se llama marca undefined
console.log("Cantidad de manzanas: " + cantidad_de_frutas.manzana);
console.log("Cantidad de platanos: " + cantidad_de_frutas.platano);
console.log("Cantidad de naranjas: " + cantidad_de_frutas.naranja);





