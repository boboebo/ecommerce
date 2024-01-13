import "./ProdDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProdDetail = ({ id, image, title, price, description }) => {
  const [quantity, setquantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantityNew) => {
    setquantity(quantityNew);
    const prod = {
      id,
      title,
      price,
      image,
    };
    addItem(prod, quantityNew);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="columns">
          <div className="column is-half">
            <div className="card-image">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
            </div>
          </div>
          <div className="column">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
              </div>
            </div>
            <div className="content">
              <p>{description}</p>
              <p className="title is-4">${price}</p>
              <div className="is-flex is-align-items-center is-justify-content-center mt-4">
                {quantity > 0 ? (
                  <Link to="/cart" className="button is-primary">
                    Terminar compra
                  </Link>
                ) : (
                  <ItemCount init={1} stock={100} onAdd={handleOnAdd} />
                )}
              </div>

              <div className="is-flex is-align-items-center is-justify-content-center mt-6">
                <Link className="button is-primary" to={"/"}>
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetail;
