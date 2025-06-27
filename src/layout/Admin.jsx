import React, {useState, useEffect} from "react";
import ProductForm from '../components/ProductForm'

const Admin = () => {
    const [product, setProducts] = useState([]);
    const [form, setForm] = useState({id:"", name:"", price:""});
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null);

    urlapi = 'https://68595f28138a18086dfe2d34.mockapi.io/products';

    //price, name, description

    useEffect(()=>{
        fetch(urlapi)
        .then((response) => response.json() )
        .then((data) =>{
            setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000)
        })

    })


    return (
        <div>
            
        </div>
    )
}

export default Admin;