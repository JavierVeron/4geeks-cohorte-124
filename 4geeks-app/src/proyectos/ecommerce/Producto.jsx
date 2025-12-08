import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import useGlobalReducer from "./context/CartContextReducer";

const Producto = () => {
    //const {productos, agregarProductoCarrito} = useContext(CartContext);
    const {state, dispatch} = useGlobalReducer();
    const [item, setItem] = useState({});
    const {productId} = useParams();

    const agregarProductoCarrito = (id) => {        
        dispatch({type:"AGREGAR_PRODUCTO", payload:id});
    }

    useEffect(() => {
        if (productId) {
            setItem(state.productos.find(item => item.id == productId));
        }
    }, [productId])

    if (!item) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fw-bold">Error!</h1>
                        <h3>No se encuentra el Producto que estás buscando!</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col fs-5 fw-light">
                    <p><b>{item.marca}</b></p>
                    <p>{item.titulo}</p>
                    <p>{item.precioOferta > 0 ? <span><b className="text-danger fs-5">{item.precioOferta} €</b> <span className="text-decoration-line-through fs-6">{item.precio} €</span></span> : <span>{item.precio} €</span>}</p>
                    <p>{item.descripcion}</p>
                    <p><button className="btn btn-dark px-5" onClick={() => {agregarProductoCarrito(item.id)}}>Añadir</button></p>
                </div>
            </div>
        </div>
    )
}

export default Producto