import "./NavBar.css";
import CartWidget from "../../common/cartWidget/cartWidget";

const Navbar = () => {
  return (
    <div className="NavBar-container">
      <div className="logo-container">
        <h2>
          <img src="../../../../img/logo.png" alt="Logo" />
        </h2>
      </div>
      <div className="menu-nav">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
