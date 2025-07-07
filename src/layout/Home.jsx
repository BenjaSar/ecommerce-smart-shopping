import React, { useEffect, useState } from "react";
import Header from "../components/statics/Header";
import Nav from "../components/Nav";
import Footer from "../components/statics/Footer";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import loading from "../assets/loading.gif";
import NotFound from "./NotFound";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = ({ addToCart, isCartOpen, setCartOpen }) => {
  const {
    cart,
    products,
    carga,
    error,
    handleAddToCart,
    vaciarCarrito,
    handleDeleteFromCart,
  } = useContext(CartContext);
  const cartCount = cart.length;
  console.log(cart.length);

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <Nav
        cartItems={cart}
        vaciarCarrito={vaciarCarrito}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleDeleteFromCart}
      />
      {carga ? (
        <img src={loading} alt="loading" />
      ) : (
        <ProductList cart={cart} products={products} addToCart={addToCart} />
      )}
      <Cart cartItems={cart} />
      <Footer />
    </>
  );
};

export default Home;
