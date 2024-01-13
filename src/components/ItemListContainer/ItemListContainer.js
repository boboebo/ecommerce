import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ProdList from "../ProdList/ProdList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, "productos");
      let snapshot = null;

      if (!id) {
        snapshot = await getDocs(productsCollection);
      } else {
        const categoryProductsQuery = query(
          productsCollection,
          where("categoryId", "==", id)
        );
        snapshot = await getDocs(categoryProductsQuery);
      }

      if (snapshot.size > 0) {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h3 className="title is-4 has-text-centered mt-5">{greeting}</h3>
      <ProdList products={products} />
    </div>
  );
};

export default ItemListContainer;
