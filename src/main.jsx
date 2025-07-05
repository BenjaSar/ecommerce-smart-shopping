import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
//import { BrowserRouter, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    <CartProvider>
      <AdminProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </AdminProvider>
    </CartProvider>
    </Router>
  </StrictMode>
);
