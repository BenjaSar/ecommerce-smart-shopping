import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import ProductForm from "../components/ProductForm";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import ProductFormEdition from "../components/ProductFormEdition";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

const Admin = () => {
  const { setisAuth } = useContext(CartContext);
  const {
    products,
    loading,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    openEditor,
    setOpenEditor,
    form,
    setForm,
    error,
    addProduct,
    editProduct,
    deleteProduct,
  } = useContext(AdminContext);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container my-4">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <nav>
              <ul className="nav">
                <li className="navItem">
                  <button
                    className="navButton"
                    onClick={() => {
                      setisAuth(false);
                      navigate("/");
                    }}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </li>
                <li className="navItem">
                  <a href="/admin">Admin</a>
                </li>
              </ul>
            </nav>
            <h1 className="mb-4">Administration Panel</h1>
            <ul className="list-group">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-thumbnail me-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{product.name}</h5>
                      <p className="mb-0">${product.price}</p>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => {
                        setOpenEditor(true);
                        setSeleccionado(product);
                        console.log("Tratando de editar", product);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        deleteProduct(product);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {open && <ProductForm onAgregar={addProduct} />}
        {openEditor && (
          <ProductFormEdition
            productSelected={seleccionado}
            onUpdateProduct={editProduct}
          />
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Admin;
