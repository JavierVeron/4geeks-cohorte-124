import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";
import productosJSON from "../../../assets/productos.json"

export const CartContextReducer = createContext();

const ecommerce = {
    productos:productosJSON,
    carrito:[],
    total:0,
    sumaTotal:0
}

export const CartContextReducerProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, ecommerce);

    return <CartContextReducer.Provider value={{state, dispatch}}>
        {children}
    </CartContextReducer.Provider>
}

export default function useGlobalReducer() {
    return useContext(CartContextReducer);
}