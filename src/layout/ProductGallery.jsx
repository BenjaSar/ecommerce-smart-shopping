import React from 'react'
import Header from '../components/statics/Header'
import Nav from '../components/Nav'
import Footer from '../components/statics/Footer'
import Product from '../components/Product'

const ProductGallery = ({products,cart, isCartOpen,setCartOpen,borrarProducto, vaciarCarrito, addToCart }) => {
  const cartCount = cart.length
  return (
    <>
      <Header />
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
      <div className='galeria'>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default ProductGallery
