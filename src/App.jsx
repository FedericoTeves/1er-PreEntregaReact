import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/home/Home";
import ItemList from "./components/pages/itemList/ItemList";

function App() {
  const [saludo, setSaludo] = useState(
    "Hola! Bienvenida a Peperina Indumentaria!!! "
  );
  const cambiarSaludo = (nuevoSaludo) => {
    setSaludo(nuevoSaludo);
  };

  return (
    <div>
      <Navbar />
      <Home />
      <ItemList saludo={saludo} cambiarSaludo={cambiarSaludo} />
    </div>
  );
}

export default App;
