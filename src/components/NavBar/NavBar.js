import "bulma/css/bulma.css";
import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar has-shadow is-info">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-menu" id="nav-links">
        <div className="navbar-end">
          <a className="navbar-item">Buloneria</a>
          <a className="navbar-item">Herramientas</a>
          <a className="navbar-item">Varios</a>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
