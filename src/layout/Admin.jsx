import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ProductForm from "../components/ProductForm";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);
  const [seleccionado, setSeleccionado] = useState(null);
  const [error, setError] = useState(null);

  const urlapi = "https://68595f28138a18086dfe2d34.mockapi.io/products";
  //price, name, description

  useEffect(() => {
    const loadingToast = toast.loading("Loading products...");
    fetch(urlapi)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
          setLoading(false);
          toast.dismiss(loadingToast);
          toast.success(`Successfully loaded ${data.length} products!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }, 2000);
      })
      .catch((error) => {
        const messageError = error || "Error fetching data the API.";
        console.log("Error fetching data of the server", messageError);
        setError(messageError);
        setLoading(false);
        // Show error toast
        toast.error(`Failed to load products: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  }, []);

  const addProduct = async (product) => {
    try {
      const response = await fetch(urlapi, {
        method: "POST",
        headers: {
          "Content-type": "body/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("This are the data", data);
    } catch (error) {
      console.log("Error adding new products". error)
    }
  };

  return (
    <div className="container my-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <h1 className="mb-4">Administration Panel</h1>
          <ul className="list-group">
            {products.map((producto) => (
              <li
                key={producto.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={producto.image}
                    alt={producto.name}
                    className="img-thumbnail me-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="mb-1">{producto.name}</h5>
                    <p className="mb-0">${producto.price}</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      <button className="btn btn-success mt-4" onClick={() => setOpen(true)}>
        Add new product
      </button>

      {open && <ProductForm onAgregar={addProduct} />}

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
  );
};

export default Admin;