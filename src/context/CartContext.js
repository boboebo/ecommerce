import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuatity, setTotalQuatity] = useState(0);

  useEffect(() => {
    getTotal();
    getCatntidad();
  }, [cart]);

  const addItem = (prod, cant) => {
    if (!prodExistente(prod.id)) {
      setCart((prev) => [...prev, { ...prod, cant }]);
    } else {
      console.error("El producto ya existe en el carrito");
    }
  };

  const getTotal = () => {
    const initialValue = 0;
    const total = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
    setTotal(total);
  };

  const getCatntidad = () => {
    const initialValue = 0;
    const totalCant = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.cant,
      initialValue
    );
    setTotalQuatity(totalCant);
  };

  const removeItem = (id) => {
    const cartUpdated = cart.filter((p) => p.id !== id);
    setCart(cartUpdated);
  };

  const deleteCart = () => {
    setCart([]);
  };

  const prodExistente = (id) => {
    return cart.some((p) => p.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, totalQuatity, addItem, removeItem, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
