import { createContext, useState } from "react"
import productosJSON from "../../../assets/productos.json"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState(productosJSON);
    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (id) => {        
        let producto = carrito.find(item => item.id == id);

        if (producto) {
            producto.cantidad++;
            setCarrito([...carrito]);
        } else {
            producto = productos.find(item => item.id == id);            
            producto.cantidad = 1;
            setCarrito([...carrito, producto]);
        }

        console.log("El producto #" + id + " se ha agregado correctamente!");
    }

    const eliminarProductoCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id != id));
        console.log("El producto #" + id + " se ha eliminado correctamente!");
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        console.log("Se ha vaciado el Carrito!");
    }

    const totalCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad, 0)
    }

    const sumaTotalCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
    }

    return <CartContext.Provider value={{productos, carrito, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, totalCarrito, sumaTotalCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider