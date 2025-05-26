import React, { useState } from 'react';

function ProductForm({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });
    const [errores, setErrores] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validateForm = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'The product name is required.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'The price must be grater than 0.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = 'The product description must be at least 10 characters.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        onAgregar(producto); 
        setProducto({ nombre: '', precio: '', descripcion: '' }); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            {/* Name */}
            <div className="form-group">
                <label htmlFor="nombre">Name:</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
                required
                />
                {errores.nombre && <p className="error-text">{errores.nombre}</p>}
            </div>

            {/* Price */}
            <div className="form-group">
                <label htmlFor="precio">Price:</label>
                <input
                type="number"
                id="precio"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
                required
                min="0"
                />
                {errores.precio && <p className="error-text">{errores.precio}</p>}
            </div>

            {/* Description */}
            <div className="form-group">
                <label htmlFor="descripcion">Description:</label>
                <textarea
                id="descripcion"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
                required
                />
                {errores.descripcion && <p className="error-text">{errores.descripcion}</p>}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>);
}

export default ProductForm;

