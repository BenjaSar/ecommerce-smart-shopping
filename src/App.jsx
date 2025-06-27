import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./layout/Home";
import ContactPage from "./layout/ContactPage"
import React, {useState, useEffect, useContext} from "react";
import ProductList from './components/ProductList';
import NotFound from './layout/NotFound'
import ProductGallery from './layout/ProductGallery'
import Login from './layout/Login';
import { CartContext } from './context/CartContext';
import ProtectedPath from './auth/ProtectedPath';
import Admin from './layout/Admin';
//``

//Array de productos

function App() {

  const {isAuthenticated} = useContext(CartContext)

  const [products,setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [carga, setCarga] = useState(true)  // state of charging
  const [error, setError] = useState(false) // state of error
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart =(product)=>{
    const productExist = cart.find(item => item.id === product.id)

    if(productExist){
      setCart(cart.map((item) => item.id === product.id ? {...item, cantidad:item.cantidad+1}: item ))
    }else{
      setCart([...cart,product ])
    }
  }

  const borrarProducto=(product)=>{
    setCart(preVCart =>{
      return preVCart.map(item => {
        if(item.id=== product.id){
          if(item.cantidad > 1){
            return {...item,cantidad:item.cantidad-1}
          }else{
            return null
          }
        }else{
          return item
        }
      }).filter(item=> item != null)
    })

  }

  const vaciarCarrito=()=>{
    setCart([])
  }

  
  useEffect(()=>{
      fetch("https://68209f05259dad2655ad17fd.mockapi.io/api/v1/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setProducts(datos);
        setCarga(false);
      })
      .catch((error) => {
        console.error('Error:', error)
        setCarga(false);
        setError(true);
      });
    },[])

    console.log("Esto es lo que tengo en el carrito", cart.length);

  return (
  <> 
  <Router>
    <Routes>
      <Route 
            path='/' 
            element={
              <Home 
                error = {error} 
                carga={carga} 
                products={products} 
                cart={cart} 
                vaciarCarrito={vaciarCarrito} 
                addToCart={handleAddToCart} 
                isCartOpen={isCartOpen} 
                setCartOpen={setCartOpen} 
                borrarProducto={borrarProducto}/>}/>
      <Route
            path="/productos"
            element={
              <ProductGallery
                cart={cart}
                products={products}
                vaciarCarrito={vaciarCarrito}
                addToCart={handleAddToCart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
              />
            }
          />
      <Route 
            path='/contactus' 
            element={
            <ContactPage/>}
            />
      
      
      <Route
            path='/admin' 
            element={
            <ProtectedPath isAuthenticated = {isAuthenticated}> <Admin/> </ProtectedPath>}
          />
      <Route
            path='/login'
            element={
              <Login/>
            }
            />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </Router>   
  </>
  )
}

export default App
