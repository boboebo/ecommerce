import "./ProdDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ProdDetail = ({ image, title, price, description }) => {
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
              <ItemCount
                init={1}
                stock={100}
                onAdd={(tot) => console.log("Total: ", tot)}
              />
              <div className="is-flex is-align-items-center is-justify-content-center mt-4">
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
