import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ init, stock, onAdd }) => {
  const [itemCount, setItemCount] = useState(init);

  const handleOnClick = (op) => {
    switch (op) {
      case "add":
        setItemCount(itemCount + 1);
        break;
      case "remove":
        if (itemCount !== 0) {
          setItemCount(itemCount - 1);
        }
        break;
      case "addToCart":
        onAdd(itemCount);
    }
  };

  return (
    <div>
      <div className="counter">
        <button
          className="button is-primary is-small"
          onClick={() => handleOnClick("remove")}
        >
          -
        </button>
        <h3 className="has-text-dark">{itemCount}</h3>
        <button
          className="button is-primary is-small"
          onClick={() => handleOnClick("add")}
        >
          +
        </button>
      </div>
      <div className="counter">
        <button
          className="button is-primary"
          onClick={() => handleOnClick("addToCart")}
          disabled={!stock}
        >
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
