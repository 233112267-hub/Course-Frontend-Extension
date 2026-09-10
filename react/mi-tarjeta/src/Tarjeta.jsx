import "./App.css"; 
function Tarjeta() {
  const nombre = "Vielka Ailyn Herrera Cruz";
  const ocupacion = "Estudiante";
  const mensaje = "¡Bienvenido a esta seccion de hoy!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <article className="tarjeta">
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h3>{ocupacion}</h3>
      <p>{mensaje}</p>
    </article>
  );
}

export default Tarjeta;