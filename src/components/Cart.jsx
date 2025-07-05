import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ cartItems, isOpen, onClose }) => {
  const {
    cart,
    products,
    vaciarCarrito,
    carga,
    error,
    handleAddToCart,
    handleDeleteFromCart,
    isAuthenticated,
  } = useContext(CartContext);

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Cart shopping</h2>
        <button onClick={onClose} className="close-button">
          ✕
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <>
            <ul className="cart-item">
              {cartItems.map((item, index) => (
                <li key={index} style={{ color: "black" }}>
                  {item.nombre} - ${item.precio} - cant:{item.cantidad}
                  <button onClick={() => handleDeleteFromCart(item)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => vaciarCarrito()}>Empyt cart</button>
            <div className="cart-footer">
              <p style={{ color: "blue" }}>
                Total: $
                {cart.reduce(
                  (total, item) => total + item.precio * item.cantidad,
                  0
                )}
              </p>
              <button
                style={{ color: "black" }}
                onClick={() => vaciarCarrito()}
                className="btnCheckout"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
