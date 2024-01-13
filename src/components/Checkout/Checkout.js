import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";

export const Checkout = () => {
  const [cargando, setCargando] = useState(false);
  const [orderId, setOrderId] = useState();

  const { cart, total, deleteCart } = useContext(CartContext);

  const crearOrden = async ({ nombre, telefono, mail }) => {
    setCargando(true);
    try {
      const orden = {
        comprador: { nombre, telefono, mail },
        productos: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const db = getFirestore();
      const batch = writeBatch(db);
      const sinStock = [];
      const ids = cart.map((prod) => prod.id);

      const productsRefs = collection(db, "productos");

      const prodFromFBInCart = await getDocs(
        query(productsRefs, where(documentId(), "in", ids))
      );

      const { docs } = prodFromFBInCart;

      docs.forEach((doc) => {
        const docData = doc.data();
        const stockIdFB = docData.stock;

        const prodEnCart = cart.find((prod) => prod.id === doc.id);
        const prodCant = prodEnCart.cant;

        if (stockIdFB >= prodCant) {
          batch.update(doc.ref, { stock: stockIdFB - prodCant });
        } else {
          sinStock.push({ id: doc.id, ...docData });
        }
      });

      if (sinStock == 0) {
        batch.commit();
        const orders = collection(db, "orders");

        const ordenesGuardadas = await addDoc(orders, orden);

        setOrderId(ordenesGuardadas.id);
        setCargando(false);
        deleteCart();
      } else {
        console.log("no hay productos en la orden");
      }
    } catch (e) {
      console.log("se produjo un error guardando la orden: ", e);
    }
  };

  if (cargando) {
    return <h1>Generacion de orden en progreso...</h1>;
  }

  if (orderId) {
    return (
      <div className="columns is-centered is-vcentered">
        <div className="column is-half">
          <h1 className="has-text-weight-bold is-size-5 has-text-centered">
            Orden generada. Id: {orderId}
          </h1>
          <h4 className="has-text-weight-bold is-size-5 has-text-centered">
            Gracias por su compra!
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="media-content has-text-weight-bold is-size-5 p-6">
        Formulario de checkout
      </h1>
      <CheckoutForm onConfirm={crearOrden} />
    </div>
  );
};
