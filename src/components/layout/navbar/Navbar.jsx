import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <img src="../../../../img/logo.png" alt="Logo" />
      </div>
      <div className="Nav">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </div>

      <cartWidget />
    </div>
  );
};

export default Navbar;
