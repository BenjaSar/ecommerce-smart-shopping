import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Cart = ({ vaciarCarrito, cartItems, isOpen, onClose, borrarProducto }) => {
  
    return (
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Cart shopping</h2>
          <button onClick={onClose} className="close-button">✕</button>
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
                    <button onClick={() => borrarProducto(item)}><i className="fa-solid fa-trash"></i></button>
                  </li>
                ))}
              </ul>
              <button onClick={() => vaciarCarrito()}>Empyt cart</button>
            </>
          )}
        </div>
      </div>
    );
  };
  
export default Cart;