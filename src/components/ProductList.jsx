import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = () =>{
    const {products, handleAddToCart} = useContext(CartContext)
    console.log("Esta es la propiedad", handleAddToCart);
    return (
    <>
    <div className='galeria'>
            {products.map(product => (
                <Product key={product.id}  product= {product} addToCart = {handleAddToCart}/>))}
    </div>
    </>
    )
}

export default ProductList