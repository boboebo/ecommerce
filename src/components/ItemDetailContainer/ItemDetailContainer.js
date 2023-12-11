import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../Data";
import ProdDetail from "../ProdDetail/ProdDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProductById(Number(id))
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="columns">
      <div className="column">
        <ProdDetail {...product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
