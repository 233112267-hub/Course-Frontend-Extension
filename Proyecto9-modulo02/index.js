
//Mis instrucciones son :) : Registrar destinos, Calcular el costo y Mostrar el itinerario.

// En viajes se almanecera cada destino con sus propiedades
const viajes = [];
//Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.
const registrarDestino = (destino, fecha, transporte) => {
    viajes.push({  // se utiliza push para agregar un nuevo objeto en la posicion final
    // propiedades
        destino,
        fecha,
        transporte
    });
};

// Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.
const calcularCosto = (destino, transporte) => {
   let costoBase = 100;
   let costoTransporte = transporte // trnsporte es la variable donde se ubica el tipo de transporte que se va a tomar   
   if (transporte  === 'avión') {
        costoTransporte = 8000;
    } else if (transporte === 'tren') {
        costoTransporte = 1500;
    } else if (transporte === 'autobús') {
        costoTransporte = 5000;
    } else if (transporte === 'coche') {
        costoTransporte = 2000;
    }
    // El costo total es la suma del costo base que es  $100 y el costo del transporte
    return costoBase + costoTransporte;
}
//Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.

const mostrarItinerario = (viajes) => {
   viajes.forEach(viaje => {
       console.log(`Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${viaje.transporte}, Costo: ${calcularCosto(viaje.destino, viaje.transporte)}`);
   });
}
// Esa es donde regidtro los lugares de destino
registrarDestino('Mexico', '2026-07-7', 'avión');
registrarDestino('Suecia', '2026-06-8', 'tren');
registrarDestino('Nueva York', '2026-11-28', 'autobús');

// Esa es donde se calcula el costo de cada viaje
calcularCosto('Mexico', 'avión');
calcularCosto('Suecia', 'tren');
calcularCosto('Nueva York', 'autobús');
// Demostracion al usuario del itineario con las propiedades y el costal total
mostrarItinerario(viajes);

