import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../Data";
import ProdList from "../ProdList/ProdList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((err) => console.log(err));
    } else {
      getProductByCategory(Number(id))
        .then((response) => {
          setProducts(response);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      <h3 className="title is-4 has-text-centered">{greeting}</h3>
      <ProdList products={products} />
    </div>
  );
};

export default ItemListContainer;
