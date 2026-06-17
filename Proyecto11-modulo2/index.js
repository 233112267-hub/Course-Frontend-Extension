
//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const producto = [
    { nombre: "Computadora", precio: 50000, categoria: "Electrónica" },
    { nombre: "Laptop", precio: 8500, categoria: "Electrónica" },
    { nombre: "Audífonos", precio: 1000, categoria: "Electrónica" },
    { nombre: "Zapatos", precio: 1500, categoria: "Calzado" },
    { nombre: "Chancla voladora", precio: 80, categoria: "Calzado" },
];
// Usa filter() para obtener los productos que cuesten menos de $100.
const productoFiltrado = producto.filter(({precio}) =>(precio < 100));

// Usa sort() para ordenar esos productos alfabéticamente por su nombre /a-z/.
// El método sort() se utiliza para ordenar los productos alfabéticamente por su nombre.
// Se utilizo localeCompare para comparar los nombres de los productos.
// Se investigo y utilze a y b para representar los nombres de los productos.
const productoOrdenado = producto.sort(({nombre: a}, {nombre: b}) => a.localeCompare(b));

// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nuevoarreglo = producto.map(({nombre}) =>(nombre));

// Muestra los resultados de la aplicación de cada método en consola.
console.log("Producto Filtrados:");
console.log(productoFiltrado);

console.log("Producto Ordenados:");
console.log(productoOrdenado);

console.log("Nuevo Arreglo:");
console.log(nuevoarreglo);

