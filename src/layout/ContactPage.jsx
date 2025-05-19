import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/ContactForm.css"

const  ContactPage = ({cart =[], isCartOpen,setCartOpen,borrarProducto, vaciarCarrito})=>{
    const cartCount = cart.length;

    return(
        <>
        <div>
            <Header />
            <Nav cartItems={cart}  vaciarCarrito={vaciarCarrito}  cartCount={cartCount}  isCartOpen={isCartOpen}  setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
            <h1 className="contact-page-wrapper">Contact Us</h1>
            <ContactForm/>
            <Footer/>
        </div>
        </>
    )
}
export default ContactPage
