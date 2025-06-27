import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-subtitle">Ups... Resource not found </p>
        <p className="notfound-text">
          The requested page could not be found
        </p>
        <Link to="/" className="notfound-button">Back to the home page</Link>
      </div>
    </div>
  );
};

export default NotFound;