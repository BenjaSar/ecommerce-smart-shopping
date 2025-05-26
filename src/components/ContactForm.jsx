import React, {useState} from "react";
import "../styles/ContactForm.css";
import smartshopLogo from '../assets/smartshop.svg'; 

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  function manejarFormulario(e) {
    e.preventDefault();
    alert(`Mensaje enviado por ${nombre} (${email}): ${mensaje}`);
    setNombre('');
    setEmail('');
    setMensaje('');
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={manejarFormulario}>
        {/*<img src={smartshopLogo} alt="SmartShop logo" className="contact-logo" />*/}

        <label htmlFor="nombre">Name</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />

        <label htmlFor="mensaje">Message</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          maxLength={300}
          placeholder="Your message (max 300 characters)*"
          required
        />

        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );
}
