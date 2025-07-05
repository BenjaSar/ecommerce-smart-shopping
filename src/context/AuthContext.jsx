import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setisAuth } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuth") === "true";
    if (isAuthenticated) {
      setisAuth(false);
      navigate("/admin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //const userPath = process.env.REACT_APP_PATH_USERS_CREDENTIAL;
    //console.log(userPath);
    console.log("I'm in the login page");

    let validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("/data/users.json");
      //const res = await fetch(userPath);
      const users = await res.json();
      const findUser = users.users.find(
        (user) => user.email === email && user.password === password
      );
      console.log("This is the user found", findUser);

      if (!findUser) {
        setErrors({ email: "The credentials provided was not right" });
        setEmail("");
        setPassword("");
        setIsLoading(false);
        //navigate(0);
      } else {
        console.log("User role", findUser.role.toLowerCase());
        if (findUser.role.toLowerCase() === "admin") {
          //localStorage.setItem("isAuth", "true");
          setisAuth(true);
          navigate("/admin");
        } else {
          //localStorage.setItem("isAuth", "true");
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error fetching users", error);
      setErrors({
        general: "Unable to load user data. Please try again later.",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const value = {
    errors,
    setErrors,
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    togglePasswordVisibility,
    handleSubmit,
    isLoading,
    showPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
