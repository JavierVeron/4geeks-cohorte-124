import { Link } from "react-router-dom"

const Card = ({item, name}) => {
    return (
        <div className="col-md-3">
            <Link to={"/detail/" + name.toLowerCase() + "/" + item.uid} className="text-decoration-none">
                <div className="card mb-3">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <button className="btn btn-primary btn-sm me-1">Ver Más</button><button className="btn btn-danger btn-sm"><i className="bi bi-heart"></i></button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card