const fs = require('fs');

// Ruta del archivo de notas
const filePath = 'C:\\Users\\Vielk\\OneDrive\\Documents\\Course-Frontend-Extension\\Proyecto17-modulo2final\\notas.json';

function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    notas = JSON.parse(fs.readFileSync(filePath, 'utf8')); // readFileSync se usa para leer el archivo de notas existentes
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2)); // writeFileSync se usa para guardar las notas actualizadas en el archivo :)

  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    // PISTA: Debes leer y parsear el contenido del archivo.
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('Mis notas guardadas:');

    notas.forEach((nota) => {
      console.log(`- ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {

    // PISTA: Primero lee todas las notas.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    // PISTA: Filtra las notas y elimina la que coincida con el título.
    // COMPLETAR: Usa Array.filter para obtener las notas restantes.
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // PISTA: Sobrescribe el archivo con las notas actualizadas.
    // COMPLETAR: Usa fs.writeFileSync.
    
    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));

    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Ejecución de ejemplo
agregarNota('Banca automotriz', 'Revisar presupuesto,   Historial cliente, Pago.');
listarNotas();
eliminarNota('Banca automotriz');


