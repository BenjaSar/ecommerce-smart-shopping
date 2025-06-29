import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);
  console.log(product.id);
  const navigate = useNavigate();
  // const [stock, setStock] = useState(5) //Handle the minimun value of stock

  const increase = () =>
    setCantidad((prev) => (prev != product.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="product">
      <div className="fondoProducto"></div>
      <img
        src={product.imagen}
        alt={product.nombre}
        className="imagenProduct"
      />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p>Stock: {product.stock}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "12px",
        }}
      >
        <button
          onClick={decrease}
          style={{
            backgroundColor: "#e0e0e0",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          style={{
            backgroundColor: "#e0e0e0",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        onClick={() => addToCart({ ...product, cantidad: cantidad })}
      >
        Add to cart
      </button>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        onClick={() => navigate(`/productos/${product.id}`)}
      >
        See more
      </button>
    </section>
  );
};

export default Product;
