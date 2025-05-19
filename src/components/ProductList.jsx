import React from "react";
import Product from "./Product";

const ProductList = ({products, addToCart}) =>{
    console.log("Estoy en el component de ProductList", products)
    console.log("Esta es la propiedad", addToCart);
    return (
    <>
    <div className='galeria'>
            {products.map(product => (
                <Product key={product.id}  product= {product} addToCart = {addToCart}/>))}
    </div>
    </>
    )
}

export default ProductList