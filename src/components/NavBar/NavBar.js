import "bulma/css/bulma.css";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar has-shadow is-info">
      <div className="navbar-item">
        <Link className="navbar-item" to="/">
          <span className="navbar-item">
            <FaShoppingBag />
          </span>
        </Link>
      </div>
      <div className="navbar-menu" id="nav-links">
        <div className="navbar-end">
          <NavLink className="navbar-item" to={`/category/2`}>
            Electronica
          </NavLink>
          <NavLink className="navbar-item" to={`/category/1`}>
            Hombre
          </NavLink>
          <NavLink className="navbar-item" to={`/category/3`}>
            Mujer
          </NavLink>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
