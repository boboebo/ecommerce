import { useContext } from "react";
import cart from "./assets/cart.png";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuatity } = useContext(CartContext);

  return (
    <div
      className="navbar-item"
      style={{ display: totalQuatity > 0 ? "block" : "none" }}
    >
      <Link to="/cart">
        <img src={cart} alt="cart" /> {totalQuatity}
      </Link>
    </div>
  );
};

export default CartWidget;
