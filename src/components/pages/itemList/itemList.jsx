import "./ItemList.css";

const ItemList = ({ saludo, cambiarSaludo }) => {
  //let nombreUsuario = "Roxana";

  return (
    <div className="container-saludo">
      <h2>{saludo}</h2>
      <button onClick={() => cambiarSaludo("En que la puedo ayudar?")}>
        Cambiar saludo
      </button>
    </div>
  );
};
export default ItemList;
