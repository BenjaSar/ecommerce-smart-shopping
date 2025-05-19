import '../styles/styles.css'
import React, {useEffect} from 'react'

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://use.fontawesome.com/releases/v5.15.4/js/all.js";
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.integrity = "sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup on unmount
    };
  }, []);

  return (
    <footer className='footer'>
       <div className="rounded-social-buttons">
        <p>Follow us in our social networks</p>
        <a
          className="social-button facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Facebook"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="social-button twitter"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social-button linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="social-button tiktok"
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our TikTok"
        >
          <i className="fab fa-tiktok"></i>
        </a>
        <a
          className="social-button youtube"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our YouTube"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="social-button instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2025 - All rights reserved</p>
    </footer>
  )
}

export default Footer;
