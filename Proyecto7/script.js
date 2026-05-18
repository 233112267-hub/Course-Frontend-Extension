/*El sitio debe ser capaza de generar una contraseña diferente de mas de 8 palabras usando simbolos, letras y numéros
Imagina las diferentes opciones que puedes implementar en tu página*/



function generatePassword(){
//Obtiene los valores de los inputs checklist y el rango
let maximo = document.getElementById("maxPrice").value;
let uppercase = document.getElementById("uppercase").checked;
let lowercase = document.getElementById("lowercase").checked;
let simbolos = document.getElementById("symbols").checked;
let numeros = document.getElementById("numbers").checked;

//debe contener mayusculas, minusculas, simbolos y numeros
let uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
let numbersSet = "0123456789";
let symbolsSet = "!@#$%^&*()";

let contrasena = "";

    let opciones = [];
//Se uso el push para agregar las variables a la array 
    if (uppercase) opciones.push(uppercaseSet);
    if (lowercase) opciones.push(lowercaseSet);
    if (numeros) opciones.push(numbersSet);
    if (simbolos) opciones.push(symbolsSet);

    if (opciones.length === 0) {
        document.getElementById("contrasena").value = "Selecciona opciones";
        return;
    }

//Checar si la contraseña cumple con los requisitos y que se active con los checklist automaticamente
//https://www.w3schools.com/js/js_quiz.asp
//.test si cumple el patron especificado
/* ADVERTENCIA: El siguiente código no es correcto 
if (uppercase) {
    caracteresDisponibles += uppercaseSet;
}
else if (lowercase) {
    caracteresDisponibles += lowercaseSet;
}
else if  (numeros) {
    caracteresDisponibles += numbersSet;
}
else if (simbolos) {
    caracteresDisponibles += symbolsSet;
}
*/
// Generar la contraseña

    if(contrasena.length < 8 || !tieneMayuscula || !tieneMinuscula || !tieneCaracterEspecial || !tieneNumero){
        document.getElementById("cifrado").innerHTML = "La contraseña no cumple con los requisitos.";
    } else {
        document.getElementById("cifrado").innerHTML = "Contraseña es correcta, Saludos";
    }
}

