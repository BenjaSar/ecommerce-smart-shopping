import ContactForm from "../components/ContactForm";
import Header from "../components/statics/Header";
import Nav from "../components/Nav";
import Footer from "../components/statics/Footer";
import "../styles/ContactForm.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const  ContactPage = ({isCartOpen,setCartOpen})=>{
    const {cart, products, carga, error, handleAddToCart, vaciarCarrito, handleDeleteFromCart} = useContext(CartContext)
    const cartCount = cart.length;

    return(
        <>
        <div>
            <Header />
            <Nav cartItems={cart}  vaciarCarrito={vaciarCarrito}  cartCount={cartCount}  isCartOpen={isCartOpen}  setCartOpen={setCartOpen} borrarProducto={handleDeleteFromCart} />
            <h1 className="contact-page-wrapper">Contact Us</h1>
            <ContactForm/>
            <Footer/>
        </div>
        </>
    )
}
export default ContactPage;
