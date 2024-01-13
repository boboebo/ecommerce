import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductById } from "../../Data";
import ProdDetail from "../ProdDetail/ProdDetail";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();

      const product = doc(db, "productos", id);
      const productSnapshot = await getDoc(product);
      if (productSnapshot.exists()) {
        setProduct({
          id: productSnapshot.id,
          ...productSnapshot.data(),
        });
      } else {
        console.log("Producto inexistente");
      }
    };

    fetchData();
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
