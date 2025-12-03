import { useParams } from "react-router-dom"
import productosJSON from "../../assets/productos.json"
import { useEffect, useState } from "react";

const Producto = () => {
    const [item, setItem] = useState({});
    const {productId} = useParams();

    useEffect(() => {
        if (productId) {
            let producto = productosJSON.find(item => item.id == productId);
            setItem(producto);
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
                </div>
            </div>
        </div>
    )
}

export default Producto