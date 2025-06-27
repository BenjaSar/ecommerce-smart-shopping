import { useContext, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [isAuthenticated, setisAuth] = useState(false);

    return (
        <CartContext.Provider
        value = {{isAuthenticated, setisAuth}}
        >
            {children}
        </CartContext.Provider>    
    )

}