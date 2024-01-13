import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CarItem/CarItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, total, totalQuatity, deleteCart } = useContext(CartContext);

  if (totalQuatity === 0) {
    return (
      <div>
        <h1>No hay Productos en el carrito</h1>
      </div>
    );
  }

  const coutas = (total * 2) / 12;

  return (
    <div>
      <div className="is-flex-direction-row p-4">
        <h1 className="media-content has-text-weight-bold is-size-5">
          Total: ${total}
        </h1>
        <h6 className="has-text-success is-size-6">12 coutas de ${coutas} </h6>
      </div>

      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="is-flex is-justify-content-space-evenly is-align-content-center">
        <button className="button is-medium" onClick={() => deleteCart()}>
          Vaciar Carrito
        </button>
        <Link className="button is-primary is-medium" to="/checkout">
          Hacer Checkout
        </Link>
      </div>
    </div>
  );
};
