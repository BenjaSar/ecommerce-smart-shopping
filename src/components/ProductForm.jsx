import React, { useState } from "react";

const ProductForm = ({ onAgregar }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [error, setErrors] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const formValidation = () => {
    const newErrors = {};
    if (!product.name.trim()) {
      newErrors.name = "The product name is required.";
    }

    if (!product.price || product.price <= 0) {
      newErrors.price =
        "The product price is required and it must be greater than 0 value.";
    }

    if (!product.description || product.description.length < 10) {
      newErrors.description =
        "The product description is required and it must have more than 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValidation) {
      return;
    }
    onAgregar(product);
    setProduct({ name: "", price: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        {error.price && <p style={{ color: "red" }}>{error.price}</p>}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="descripcion"
          value={product.description}
          onChange={handleChange}
          required
        />
        {error.description && (
          <p style={{ color: "red" }}>{error.description}</p>
        )}
      </div>
      <button type="submit" class="btn btn-success">
          Add Product
      </button>
    </form>
  );
};

export default ProductForm;
