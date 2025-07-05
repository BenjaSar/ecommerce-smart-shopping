import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import ContactPage from "./layout/ContactPage";
import React, { useState, useEffect, useContext } from "react";
import ProductList from "./components/ProductList";
import NotFound from "./layout/NotFound";
import ProductGallery from "./layout/ProductGallery";
import Login from "./layout/Login";
import { CartContext } from "./context/CartContext";
import { AdminContext } from "./context/AdminContext";
import ProtectedPath from "./auth/ProtectedPath";
import Admin from "./layout/Admin";
import DetailsProduct from "./components/DetailsProduct";
//``

//Array de productos

function App() {
  const {
    products,
    carga,
    error,
    handleAddToCart,
    vaciarCarrito,
    handleDeleteFromCart,
    isAuthenticated,
  } = useContext(CartContext);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      
        <Routes>
          <Route
            path="/"
            element={
              <Home
                vaciarCarrito={vaciarCarrito}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
              />
            }
          />
          <Route
            path="/productos"
            element={
              <ProductGallery
                vaciarCarrito={vaciarCarrito}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
              />
            }
          />

          <Route
            path="/productos/:id"
            element={<DetailsProduct products={products} />}
          />
          <Route path="/contactus" element={<ContactPage />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedPath isAuthenticated={isAuthenticated}>
                <Admin />
              </ProtectedPath>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
