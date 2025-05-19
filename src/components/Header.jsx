import React from 'react'
import '../styles/styles.css'
import logo from '../assets/smartshop.svg'


const Header = () => {

    let estilos = {  
      background: "linear-gradient(135deg, #7091E6 0%, #4A6EDB 100%)",
      padding: "20px",
      textAlign: "center",
      color: "#FFFFFF",
      borderRadius: "12px",
      fontWeight: "500",
      fontSize: "1.1rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",}

  return (
    <header style={estilos}>
      <img src={logo} className='logo' />
        <h1>Smart Shopping</h1>
    </header>
  )
}

export default Header
