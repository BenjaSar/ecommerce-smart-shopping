import React from 'react'
import '../styles/styles.css'
import Cart from './Cart'
import {Link} from 'react-router-dom';

const Nav = ({vaciarCarrito, cartCount,cartItems, isCartOpen, setCartOpen,borrarProducto }) => {
const navbarstyles = {
  backgroundColor: '#1a1f2c',
  color: '#ffffff',
  padding: '16px 24px',
  position: 'relative',
  top: 0,
  overflow: 'hidden',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'all 0.3s ease',
}

/*const navstyle = { backgroundColor: '#333', color: "white", padding: "10px", position:"relative", overflow:"hidden",border:  "#1E2B3A", boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"}*/


  return (
    <nav style={navbarstyles}>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About us</Link></li>
        <li><Link to='/contactus'> Contact Us</Link></li>
        <li><Link to='/productos'> Products</Link></li>
        <li>Cart: {cartCount}</li>
        <li className='cartNav'>
          <button className='btnCart' onClick={() => setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
          <Cart vaciarCarrito={vaciarCarrito} cartItems={cartItems} isOpen={isCartOpen} onClose={() => setCartOpen(false)} borrarProducto={borrarProducto} />
        </li>
      </ul>
    </nav>
  )
}


export default Nav