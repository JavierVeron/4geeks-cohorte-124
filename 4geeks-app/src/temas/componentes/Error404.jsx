import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col text-end">
                    <h1 className="fw-bold text-primary" style={{fontSize:"100px"}}>Error 404</h1>
                </div>
                <div className="col">
                    <h2 className="fw-bold my-3">Oopss!!</h2>
                    <p>No encontramos la página que buscas.<br />Puedes visitar nuestra página de inicio y navegar por nuestra web</p>
                    <Link to={"/"} className="btn btn-dark fw-bold my-3">Ir a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404