import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsProduct = ({ products }) => {
  console.log("I'm in the detail page", products);
  const { id } = useParams();
  const productId = isNaN(id) ? id : parseInt(id, 10);
  const navigate = useNavigate();

  const product = products.find(
    (producto) => parseInt(producto.id) === productId
  );
  console.log("This is the product", product);

  // Show a toast if product not found
  if (!product) {
    toast.error("Product not found!", { autoClose: 2000 });
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Product Details: {productId}</h1>

      {product ? (
        <div className="card" style={{ maxWidth: "400px" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <img
            src={product.imagen}
            className="card-img-top"
            alt={product.nombre}
          />
          <div className="card-body">
            <h5 className="card-title">{product.nombre}</h5>
            <p className="card-text">${product.precio}</p>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          The product was not found.
        </div>
      )}

      <div className="mt-4">
        <button className="btn btn-secondary me-2" onClick={handleGoBack}>
          Go Back
        </button>
        <button className="btn btn-primary" onClick={handleGoHome}>
          Go Home
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default DetailsProduct;
