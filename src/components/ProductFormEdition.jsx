import React, { useState, useEffect } from "react";

const ProductFormEdition = ({ productSelected, onUpdateProduct }) => {
  const [product, setProduct] = useState(productSelected);

  console.log(productSelected);

  useEffect(() => {
  /*  setProduct(productSelected);
  }, [productSelected]);*/
  if (productSelected) {
      setProduct(productSelected);
    }
  }, [productSelected]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onUpdateProduct(product);
        console.log(product);
      }}
    >
      <h2>Edit product</h2>
      <div>
        <label>ID</label>
        <input
          type="number"
          name="id"
          value={product.id || ''}
          onChange={onHandleChange}
          readOnly
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name || ""}
          onChange={onHandleChange}
          placeholder="Product name"
          required
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price || ""}
          onChange={onHandleChange}
          placeholder="Price"
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          value={product.description || ""}
          onChange={onHandleChange}
          placeholder="Product description"
          required
        />
      </div>
      <button type="submit" className="btn btn-success">
        Update product
      </button>
    </form>
  );
};

export default ProductFormEdition;