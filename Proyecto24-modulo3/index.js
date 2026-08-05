const planetas = require("./planetas");

console.log("Lista de planetas y lunas:\n");
planetas.forEach((planeta, index) => {
  console.log(`${index + 1}. ${planeta.nombre}`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);

});

console.log(`\nTotal de planetas: ${planetas.length}`);

const recientes = planetas.filter(planeta => !isNaN(parseInt(planeta.descubiertoEn)));

if (recientes.length > 0) {
  const ultimo = recientes.reduce((a, b) =>
    parseInt(a.descubiertoEn) > parseInt(b.descubiertoEn) ? a : b
  );

  console.log(`Descubrimiento más reciente: ${ultimo.nombre} (${ultimo.descubiertoEn})`);
}