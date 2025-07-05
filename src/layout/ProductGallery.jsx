import React from 'react'
import { useContext } from 'react'
import Header from '../components/statics/Header'
import Nav from '../components/Nav'
import Footer from '../components/statics/Footer'
import Product from '../components/Product'
import { CartContext } from '../context/CartContext'

const ProductGallery = ({isCartOpen,setCartOpen }) => {
  const {cart, products, carga, error, handleAddToCart, vaciarCarrito, handleDeleteFromCart} = useContext(CartContext)
  const cartCount = cart.length
  return (
    <>
      <Header />
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={handleDeleteFromCart}/>
      <div className='galeria'>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default ProductGallery
