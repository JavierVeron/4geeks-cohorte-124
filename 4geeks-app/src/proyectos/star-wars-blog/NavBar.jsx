import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <Link to={"/"} className="text-decoration-none">
                        <h1 className="fw-bold">Star Wars Blog</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar