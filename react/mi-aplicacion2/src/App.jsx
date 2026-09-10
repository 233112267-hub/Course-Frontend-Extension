import { useState } from "react";
import "./App.css"; 
function ListaDeCompras() {
  const [lista, setLista] = useState([]);
  const [producto, setProducto] = useState("");

  const agregarProducto = (producto) => {
    if (producto.trim() === "") return;

    setLista([...lista, producto]);
  };

  const eliminarProducto = (index) => {
    const eliminado = [...lista];
    eliminado.splice(index, 1);
    setLista(eliminado);
  };

  return (
    <section nameClass="App">
      <h1>Lista de Compras</h1>

      <ul>
        {lista.map((producto, index) => (
          <li key={index}>
            {producto}{" "}
            <button onClick={() => eliminarProducto(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Agregar producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <button
        onClick={() => {
          agregarProducto(producto);
          setProducto("");
        }}
      >
        Agregar
      </button>
    </section>
  );
}

export default ListaDeCompras;
