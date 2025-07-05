import {createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isAuthenticated, setisAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [carga, setCarga] = useState(true); // state of charging
  const [error, setError] = useState(false); // state of error

  const handleAddToCart = (product) => {
    const productExist = cart.find((item) => item.id === product.id);

    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  const handleDeleteFromCart = (product) => {
    setCart((preVCart) => {
      return preVCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            } else {
              return null;
            }
          } else {
            return item;
          }
        })
        .filter((item) => item != null);
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  useEffect(() => {
    fetch("https://68209f05259dad2655ad17fd.mockapi.io/api/v1/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProducts(datos);
        setCarga(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCarga(false);
        setError(true);
      });
  }, []);

  console.log("Esto es lo que tengo en el carrito", cart.length);

  return (
    <CartContext.Provider
      value={{
        cart,
        products,
        carga,
        error,
        handleAddToCart,
        handleDeleteFromCart,
        vaciarCarrito,
        isAuthenticated,
        setisAuth,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};