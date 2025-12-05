import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import useGlobalReducer from "./context/CartContextReducer";

const Carrito = () => {
    //const {carrito, eliminarProductoCarrito, vaciarCarrito, totalCarrito, sumaTotalCarrito} = useContext(CartContext);
    const {state, dispatch} = useGlobalReducer();

    const totalCarrito = () => {
        return state.total;
    }

    const sumaTotalCarrito = () => {
        return state.sumaTotal;
    }

    const vaciarCarrito = () => {
        dispatch({type:"VACIAR_CARRITO"});
    }

    const eliminarProductoCarrito = (id) => {        
        dispatch({type:"ELIMINAR_PRODUCTO", payload:id});
    }

    if (totalCarrito() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fw-bold">No se encontaron Productos en el Carrito!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={6}><button className="btn btn-dark mx-5" onClick={vaciarCarrito}>Vaciar Carrito <i className="bi bi-trash"></i></button></td>
                            </tr>
                            {
                                state.carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.precio} €</td>
                                        <td className="align-middle">x{item.cantidad}</td>
                                        <td className="align-middle">{item.precio * item.cantidad} €</td>
                                        <td className="align-middle text-end"><button className="btn btn-dark mx-5" onClick={() => {eliminarProductoCarrito(item.id)}}>Eliminar <i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4}><b>Total a Pagar</b></td>
                                <td><b>{sumaTotalCarrito()} €</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
}

export default Carrito