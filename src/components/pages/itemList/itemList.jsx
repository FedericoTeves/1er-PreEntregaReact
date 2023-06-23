const itemList = ({ saludo, cambiarSaludo, cambiarNombre }) => {
  let nombreUsuario = "Roxana";

  return (
    <div>
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("En que la puedo ayudar?")}>
        Cambiar saludo
      </button>
      <button onClick={() => cambiarNombre(nombreUsuario)}>
        Cambiar Nombre
      </button>
    </div>
  );
};
export default itemList;
