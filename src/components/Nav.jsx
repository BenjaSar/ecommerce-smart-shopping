import React from "react";
import "../styles/styles.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Nav = ({
  cartCount,
  cartItems,
  isCartOpen,
  setCartOpen,
}) => {
  const {
    cart,
    products,
    carga,
    error,
    handleAddToCart,
    vaciarCarrito,
    handleDeleteFromCart,
  } = useContext(CartContext);

  const navbarstyles = {
    backgroundColor: "#1a1f2c",
    color: "#ffffff",
    padding: "16px 24px",
    position: "relative",
    top: 0,
    overflow: "hidden",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  };

  return (
    <nav style={navbarstyles}>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About us</Link>
        </li>
        <li>
          <Link to="/contactus"> Contact Us</Link>
        </li>
        <li>
          <Link to="/productos"> Products</Link>
        </li>
        <li>Cart: {cartCount}</li>
        <li className="cartNav">
          <button className="btnCart" onClick={() => setCartOpen(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <Cart
            vaciarCarrito={vaciarCarrito}
            cartItems={cartItems}
            isOpen={isCartOpen}
            onClose={() => setCartOpen(false)}
            borrarProducto={handleDeleteFromCart}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
