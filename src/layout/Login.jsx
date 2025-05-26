import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css"

const Login = ()=> {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] =  useState("");
const [passwordError, setPasswordError] = useState("");
const  navigate = useNavigate();

const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };  
  
const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } 
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    else {
      setPasswordError("");
      return true;
    }
  };

const handleSubmit = (e)=>{
    e.preventDefault();
    if (validateEmail() && validatePassword()) {
        console.log("Login successful, you're in the adming page");
        navigate("/admin");
    }
  };

  return (
    <div className="form-container">
    <div className="form-box">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  </div>
  );
};



export default Login;