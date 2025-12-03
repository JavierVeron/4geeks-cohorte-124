import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanQdidbSoEDAuZRrkFvSfNI4XKYpAuSPdsQ&s" alt="El Corte Inglés" width={180} />
                    </Link>
                </div>
            </div>
            <div className="row my-3">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to={"/productos"} className="nav-link text-dark">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/productos/hombre"} className="nav-link text-dark">Hombre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/productos/mujer"} className="nav-link text-dark">Mujer</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/carrito"} className="nav-link text-dark">Carrito</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar