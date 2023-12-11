import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ id, image, title }) => {
  return (
    <div className="column is-one-third">
      <div className="card card-equal-height mb-4">
        <div className="card-image">
          <figure className="image is-square">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
        </div>
        <div className="is-flex is-align-items-center is-justify-content-center">
          <Link className="button is-primary" to={`/product/${id}`}>
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
