import React, { useContext, useState } from 'react';
import Nav from "../components/Nav";
import { CartContext } from '../context/CartContext';
import Header from '../components/statics/Header';
import Footer from '../components/statics/Footer';

const Aboutus = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  
  const {
    cart,
    products,
    carga,
    error,
    handleAddToCart,
    vaciarCarrito,
    handleDeleteFromCart,
  } = useContext(CartContext);

  // Calculate cart count
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const mainStyles = {
    flex: 1,
    padding: '4rem 2rem',
    maxWidth: '100vw',
    margin: '0 auto',
    width: 'auto',
  };

  const heroSectionStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '3rem 0',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  const titleStyles = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1a1f2c',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyles = {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginBottom: '2rem',
    fontStyle: 'italic',
  };

  const contentSectionStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  };

  const cardStyles = {
    backgroundColor: '#ffffff',
    padding: '4rem',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(76, 175, 80, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const cardHoverStyles = {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  };

  const iconStyles = {
    fontSize: '3rem',
    color: '#4CAF50',
    marginBottom: '1rem',
    display: 'block',
  };

  const cardTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a1f2c',
    marginBottom: '1rem',
  };

  const cardTextStyles = {
    fontSize: '1rem',
    color: '#6c757d',
    lineHeight: '1.6',
  };

  const statsStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
    textAlign: 'center',
  };

  const statItemStyles = {
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '2px solid #4CAF50',
  };

  const statNumberStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4CAF50',
    display: 'block',
  };

  const statLabelStyles = {
    fontSize: '1rem',
    color: '#6c757d',
    marginTop: '0.5rem',
  };

  const teamSectionStyles = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const sectionTitleStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1a1f2c',
    marginBottom: '1rem',
  };

  const valuesStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  };

  const valueItemStyles = {
    textAlign: 'center',
    padding: '1.5rem',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '2px solid #e9ecef',
    transition: 'all 0.3s ease',
  };

  const handleCardHover = (e, isHover) => {
    if (isHover) {
      Object.assign(e.target.style, cardHoverStyles);
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
  };

  return (
    <div style={containerStyles}>
      <Header />
      <Nav
        cartItems={cart}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        vaciarCarrito={vaciarCarrito}
        borrarProducto={handleDeleteFromCart}
      />
      
      <main style={mainStyles}>
        {/* Hero Section */}
        <section style={heroSectionStyles}>
          <h1 style={titleStyles}>About SmartShop</h1>
          <p style={subtitleStyles}>
            Where intelligent shopping meets effortless convenience
          </p>
          <div style={{ fontSize: '4rem', color: '#4CAF50', marginBottom: '1rem' }}>
            🛒
          </div>
        </section>

        {/* Main Content */}
        <section style={contentSectionStyles}>
          <div 
            style={cardStyles}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <i className="fa-solid fa-lightbulb" style={iconStyles}></i>
            <h3 style={cardTitleStyles}>Our Story</h3>
            <p style={cardTextStyles}>
              SmartShop was born from a passion for innovation and a commitment to value. 
              We're your one-stop destination for curated products, unbeatable deals, and 
              a smarter way to shop online.
            </p>
          </div>

          <div 
            style={cardStyles}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <i className="fa-solid fa-heart" style={iconStyles}></i>
            <h3 style={cardTitleStyles}>Our Mission</h3>
            <p style={cardTextStyles}>
              We believe shopping should be simple, secure, and satisfying — without 
              endless scrolling or hidden fees. That's why we combine cutting-edge 
              technology with a human touch to bring you a seamless, personalized 
              shopping experience.
            </p>
          </div>

          <div 
            style={cardStyles}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
          >
            <i className="fa-solid fa-star" style={iconStyles}></i>
            <h3 style={cardTitleStyles}>What We Offer</h3>
            <p style={cardTextStyles}>
              Whether you're looking for the latest gadgets, everyday essentials, or 
              trending lifestyle picks, we handpick our collections to save you time 
              and money — so you can focus on what matters most.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section style={statsStyles}>
          <div style={statItemStyles}>
            <span style={statNumberStyles}>10K+</span>
            <span style={statLabelStyles}>Happy Customers</span>
          </div>
          <div style={statItemStyles}>
            <span style={statNumberStyles}>5K+</span>
            <span style={statLabelStyles}>Products</span>
          </div>
          <div style={statItemStyles}>
            <span style={statNumberStyles}>99.9%</span>
            <span style={statLabelStyles}>Uptime</span>
          </div>
          <div style={statItemStyles}>
            <span style={statNumberStyles}>24/7</span>
            <span style={statLabelStyles}>Support</span>
          </div>
        </section>

        {/* Values Section */}
        <section style={teamSectionStyles}>
          <h2 style={sectionTitleStyles}>Our Values</h2>
          <div style={valuesStyles}>
            <div style={valueItemStyles}>
              <i className="fa-solid fa-shield-halved" style={{ ...iconStyles, fontSize: '2rem' }}></i>
              <h4 style={cardTitleStyles}>Security First</h4>
              <p style={cardTextStyles}>
                Your data and transactions are protected with industry-leading security measures.
              </p>
            </div>
            <div style={valueItemStyles}>
              <i className="fa-solid fa-rocket" style={{ ...iconStyles, fontSize: '2rem' }}></i>
              <h4 style={cardTitleStyles}>Innovation</h4>
              <p style={cardTextStyles}>
                We continuously evolve our platform to provide the best shopping experience.
              </p>
            </div>
            <div style={valueItemStyles}>
              <i className="fa-solid fa-users" style={{ ...iconStyles, fontSize: '2rem' }}></i>
              <h4 style={cardTitleStyles}>Customer Focus</h4>
              <p style={cardTextStyles}>
                Every decision we make is centered around improving your shopping experience.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 style={sectionTitleStyles}>Ready to Start Shopping?</h2>
          <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '2rem' }}>
            Join thousands of satisfied customers and discover the SmartShop difference today.
          </p>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#45a049';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
            }}
            onClick={() => window.location.href = '/productos'}
          >
            Shop Now
          </button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Aboutus;