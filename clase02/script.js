/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.*/

let nota=95 //Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
  console.log("Actividad de practica Proyecto:");
if (nota >= 90) {
    console.log("Excelente");
}
else if (nota >=75 && nota <= 89) {
    console.log("Bien");
}
else if(nota >=60 && nota <= 74) {
    console.log("Suficiente");
}
else {
    console.log("No aprueba");
}
/*Ejercicios Clase pasada:
  Actividad1:Clasificar las etapas del humano 0-12 niño 13-17 adolescente 18-60 Adulto 
*/ 
let edad = 20;
  console.log("Actividad 1:");
if (edad >= 0 && edad <= 12) {
    console.log("Niño");
}
else if (edad >= 13 && edad <= 17) {
    console.log("Adolecente");
}
else if(edad >= 18 && edad <= 60) {
    console.log("Adulto");
}
else{
    console.log("Error. Ingresa el número de tu edad");
}


let numero1= 10;
let numero2= 20;
let numero3= 5;
//Operaciones ternarias 1 forma
let mayor = (numero1 > numero2 ? numero1 : numero2) > numero3  ? (numero1 > numero2 ? numero1 : numero2) : numero3;
let menor = (numero1 < numero2 ? numero1 : numero2) < numero3  ? (numero1 < numero2 ? numero1 : numero2)  : numero3;

  console.log("Actividad 2");
  console.log("Mayor:",  mayor);
  console.log("Menor:", menor);

//Actividad3:Pide tres lados de untriangulo y determina si es equilatero, isosceles 

let lado1 =5
let lado2 =6
let lado3 =3
    console.log("Actividad 3:");
    if (lado1==lado2 && lado2==lado3) {
        console.log("El triangulo es equilatero");
    }else if (lado1==lado2 || lado1==lado3 || lado2==lado3) {
        console.log("El triangulo es isosceles");
    //Dado caso que los lados no sean iguales 
    }else{
        console.log("El triangulo es escaleno");
    }

//Actividad 4:Pide un usuario y contraseña y determina si tiene acceso o no
let usuario = "ailyn";
let contrasena = "admin";
    console.log("Actividad 4:");
if (usuario === "ailyn" && contrasena === "admin") {
    console.log("Acceso autorizado");
} else {
    console.log("Acceso denegado");
}