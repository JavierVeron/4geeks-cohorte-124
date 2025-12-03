import { Link, useParams } from "react-router-dom"
import productosJSON from "../../assets/productos.json"
import { useEffect, useState } from "react"

const Productos = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();    

    useEffect(() => {
        let productos = categoryId ? productosJSON.filter(item => item.categoria == categoryId) : productosJSON;
        setItems(productos);
    }, [categoryId])

    if (items.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="fw-bold">Error!</h1>
                        <h3>No se encontraron Productos por esa Categoría!</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid my-5">
            <div className="row">
                {
                    items.map(item => (
                        <div key={item.id} className="col-md-3">
                            <Link to={"/producto/" + item.id} className="text-decoration-none">
                                <div className="card border-0">
                                    <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                                    <div className="card-body">
                                        <p className="card-text fw-light"><b>{item.marca}</b><br />{item.titulo}</p>
                                        <p>{item.precioOferta > 0 ? <span><b className="text-danger fs-5">{item.precioOferta} €</b> <span className="text-decoration-line-through fs-6">{item.precio} €</span></span> : <span>{item.precio} €</span>}</p>
                                        <p className="card-text fw-light"><b>{item.envioRapido ? "Envío rápido" : ""}</b></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Productos