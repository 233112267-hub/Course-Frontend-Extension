//Crea un arreglo vacío llamado listaDeCompras.
//let listaDeCompras = new Set();----> Alternativa se puede usar el set para evitar duplicados
//Arreglo y   set son diferentes  ya que el arreglo permite elementos duplicados y el set no lo permite, el set es una colección de valores únicos, mientras que un arreglo puede contener elementos duplicados.
let listaDeCompras = [];

//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
const agregarProducto = (producto) => {
   // listaDeCompras.add(producto); // Usamos add para agregar un nuevo elemento al Set
    // Evitar duplicados en el arreglo
      if (!listaDeCompras.includes(producto)) { // con includes se verifica si el producto ya existe en el arreglo :) ahhh mucho texto
        listaDeCompras.push(producto);// Usamos push para agregar un nuevo elemento al arreglo
    }
};
// Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = (producto) => {
     // listaDeCompras.delete(producto); // se utiliza delete para eliminar un elemento del Set por que con push no se puede
     // modificar el contenido de un array ya existente eliminando
     listaDeCompras.splice(listaDeCompras.indexOf(producto), 1);// con el indexOf se obtiene la posicion del producto a eliminar
};
// Mostrar Lista de compra
const mostrarLista = () => {
    console.log(listaDeCompras);
};

// Agregar productos a la lista de compras
agregarProducto('Zanahoria');
agregarProducto('Perfume');
agregarProducto('Harina');
agregarProducto('Dulce de leche');
agregarProducto('Perfume');//No se tiene que duplicar este elemento

//Eliminar un producto de la lista de compras
eliminarProducto('Harina');

// Mostrar la lista de compras actualizada
mostrarLista();
