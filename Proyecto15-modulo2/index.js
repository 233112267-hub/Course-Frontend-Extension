
const regalos = ["Terreneitor", "Casita de Sueños", "Mochila", "Xbox", "Computadora"];
//1.Usa un índice inicial (index = 0) para rastrear la posición en el arreglo.
// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function encontrar(regalos,Nombre, index = 0) {
    //3.Si index === gifts.length, el regalo no está en la lista.
    if (index === regalos.length) { 
        return `${Nombre} no está en la lista.`;
    }
//4.Si gifts[index] === giftName, el regalo está en esa posición.
    if (regalos[index] === Nombre) {
        return `${Nombre} está en la lista.`;
    }

//5.Realiza una llamada recursiva aumentando el índice (index + 1).

    return encontrar(regalos, Nombre, index + 1);


}
let regaloaencontrar = "Xbox";
console.log(encontrar(regalos, regaloaencontrar));

