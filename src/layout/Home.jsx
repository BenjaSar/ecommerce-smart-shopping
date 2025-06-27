import React,{useEffect,useState} from 'react'
import Header from '../components/statics/Header'
import Nav from '../components/Nav'
import Footer from '../components/statics/Footer'
import Main from '../components/Main'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import loading from '../assets/loading.gif'
import NotFound from './NotFound'

const Home = ({carga,error,products,cart,addToCart, isCartOpen,setCartOpen,borrarProducto, vaciarCarrito}) => {
    const cartCount = cart.length
    console.log(cart.length)

    if(error){
      return <NotFound/>
    }
   
  return (
    <>
      <Header/>
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cartCount} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto}/>
      <Main />
      {
      carga ? <img src={loading} alt='loading' /> :
      <ProductList cart={cart} products={products} addToCart={addToCart}/>
      }
      <Cart cartItems={cart}/>
      <Footer/>
    </>
  )
}

export default Home